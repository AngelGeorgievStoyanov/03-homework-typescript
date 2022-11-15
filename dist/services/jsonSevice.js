var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiJson = 'http://localhost:3000';
export function getAllFavorites() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(`${apiJson}/posts`);
        const res = yield data.json();
        return res;
    });
}
export function addToFavorites(id, title, author) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiJson}/posts`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ id, title, author })
        });
        const result = yield response.json();
        return result;
    });
}
export function deleteFavoritesId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiJson}/posts/${id}`, {
            method: 'DELETE'
        });
        return response;
    });
}
export function createComments(id, title, description, timeCreated, timeEdited, bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiJson}/comments`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ id, title, description, timeCreated, timeEdited, bookId })
        });
        const result = yield response.json();
        return result;
    });
}
export function getAllCommentByBookId(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(`${apiJson}/comments?bookId=${bookId}`);
        const res = yield data.json();
        return res;
    });
}
export function deleteAllCommentsByBookId(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiJson}/comments?bookId=${bookId}`);
        const arrComment = yield response.json();
        arrComment.map((x) => __awaiter(this, void 0, void 0, function* () { return yield deleteCommentById(x.id); }));
    });
}
export function deleteCommentById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${apiJson}/comments/${id}`, {
            method: 'DELETE'
        });
        return response;
    });
}
//# sourceMappingURL=jsonSevice.js.map