var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clearDiv } from "./clearDiv.js";
import { detailsPage } from "./detailsBook.js";
import { home } from "./home.js";
import { allMyFavorites } from "./myFavPage.js";
import { getBookById } from "./services/bookServices.js";
import { addToFavorites, createComments, deleteAllCommentsByBookId, deleteFavoritesId, getAllFavorites } from "./services/jsonSevice.js";
const div = document.getElementById('result');
const divCildren = div.childNodes;
const btnMyFav = document.getElementById('myFav');
export function targetButton(e, arrLastSearch) {
    var _a, _b, _c, _d, _e;
    return __awaiter(this, void 0, void 0, function* () {
        const classTarget = e.target.className;
        const id = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
        if (classTarget == 'btnDtls') {
            if (divCildren.length > 0) {
                clearDiv(divCildren);
            }
            const book = yield getBookById(id);
            detailsPage(book, div);
        }
        else if (classTarget == 'btnBackToHome') {
            clearDiv(divCildren);
            home(arrLastSearch, div);
        }
        else if (classTarget == 'btnBackToFav') {
            clearDiv(divCildren);
            allMyFavorites(e);
        }
        else if (classTarget == 'btnCmnt') {
            const form = (_c = (_b = e.target.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.childNodes[6].childNodes[0];
            form.style.display = '';
        }
        else if (classTarget == 'btnFav') {
            btnMyFav.style.display = 'block';
            const book = yield getBookById(id);
            const title = book.volumeInfo.title != undefined ? book.volumeInfo.title : 'For this book missing title in db';
            const author = book.volumeInfo.authors != undefined ? book.volumeInfo.authors : 'For this book missing author in db';
            const bookId = book.id;
            addToFavorites(bookId, title, author);
            e.target.textContent = 'Remove';
            e.target.className = 'btnRmv';
        }
        else if (classTarget == 'btnRmv') {
            const book = yield deleteFavoritesId(id);
            const allCommentsBook = yield deleteAllCommentsByBookId(id);
            const books = yield getAllFavorites();
            e.target.textContent = 'Favorits';
            e.target.className = 'btnFav';
            books.length == 0 ? btnMyFav.style.display = 'none' : btnMyFav.style.display = 'block';
            if (((_e = (_d = e.target.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.className) == 'divFav') {
                allMyFavorites(e);
            }
        }
        else if (classTarget == 'btnAddComment') {
            const id = e.currentTarget.children[0].id;
            const form = e.target.parentNode;
            const title = (form === null || form === void 0 ? void 0 : form.childNodes[1]).value.trim();
            const description = (form === null || form === void 0 ? void 0 : form.childNodes[3]).value.trim();
            const timeCreated = new Date().toJSON().split('.')[0];
            let timeData = timeCreated.split('T')[0];
            const timeH = timeCreated.split('T')[1];
            timeData = timeData.split('-').reverse().join('-');
            const currentDataCreated = timeH + '/' + timeData;
            if (title != '' && description != '') {
                const idComment = Math.random().toString(16).slice(2);
                const comment = {
                    "id": idComment,
                    "title": title,
                    "description": description,
                    "timeCreated": currentDataCreated,
                    "timeEdited": false,
                    "bookId": id,
                };
                yield createComments(comment.id, comment.title, comment.description, comment.timeCreated, comment.timeEdited, comment.bookId);
            }
            form.style.display = 'none';
            if (divCildren.length > 0) {
                clearDiv(divCildren);
            }
            const book = yield getBookById(id);
            detailsPage(book, div);
        }
    });
}
//# sourceMappingURL=eventTarget.js.map