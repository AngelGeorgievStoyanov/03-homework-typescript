var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const URL_API_BOOKS = 'https://www.googleapis.com/books/v1/volumes?q=';
const max = '&maxResults=40';
const urlBook = 'https://www.googleapis.com/books/v1/volumes/';
export function getAllBoks(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentUrl = URL_API_BOOKS + query + max;
        const data = yield fetch(currentUrl);
        const res = yield data.json();
        const books = res.items;
        return books;
    });
}
export function getBookById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield fetch(urlBook + id);
        return book.json();
    });
}
//# sourceMappingURL=bookServices.js.map