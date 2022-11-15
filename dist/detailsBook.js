var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { elem } from './createElement.js';
import { addCommentForm } from './formComments.js';
import { getAllCommentByBookId, getAllFavorites } from './services/jsonSevice.js';
import { card } from './cardComment.js';
export function detailsPage(bookObj, div) {
    return __awaiter(this, void 0, void 0, function* () {
        const idBook = bookObj.id;
        const article = elem('article', 'false', 'false', 0, 0, 'false', idBook);
        const h1 = elem('h1', 'false', 'false', 0, 0, 'false', 'false');
        h1.textContent = 'Title  of the Book  --- ' + bookObj.volumeInfo.title;
        const h2 = elem('h2', 'false', 'false', 0, 0, 'false', 'false');
        const arrAuthors = new Array(bookObj.volumeInfo.authors);
        h2.textContent = arrAuthors != undefined ? 'Authors of the Book  ---  ' + arrAuthors[0].join('  and  ') : 'There is no author for this book in DB';
        const h3 = elem('h3', 'false', 'false', 0, 0, 'false', 'false');
        const date = bookObj.volumeInfo.publishedDate;
        h3.textContent = date != undefined ? 'Published date  ---  ' + date.split('-').reverse().join('/') : 'No info for published date';
        const p = elem('p', 'false', 'false', 0, 0, 'false', 'false');
        p.innerHTML = bookObj.volumeInfo.description != undefined ? 'Description  ' + bookObj.volumeInfo.description : 'There is no description for this book in DB';
        const src = bookObj.volumeInfo.imageLinks.thumbnail;
        const img = elem('img', 'false', 'false', 0, 0, src, 'false');
        const section = elem('section', 'sectionButtons', 'false', 0, 0, 'false', 'false');
        const btnBackHome = elem('button', 'btnBackToHome', 'BACK TO HOME', 0, 0, 'false', 'false');
        const btnBackFav = elem('button', 'btnBackToFav', 'BACK TO FAVORITES', 0, 0, 'false', 'false');
        const btnComment = elem('button', 'btnCmnt', 'Add coment', 0, 0, 'false', 'false');
        const hasFav = yield getAllFavorites();
        const hasFavorit = hasFav.filter((x) => x.id == idBook);
        article.appendChild(h1);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(p);
        section.appendChild(btnBackHome);
        if (hasFav.length > 1) {
            section.appendChild(btnBackFav);
        }
        if (hasFavorit.length > 0) {
            section.appendChild(btnComment);
        }
        article.appendChild(section);
        const divForm = elem('div', 'div-form', 'false', 0, 0, 'false', 'false');
        const form = yield addCommentForm();
        divForm.append(form);
        article.appendChild(divForm);
        const comments = yield getAllCommentByBookId(idBook);
        if (comments != undefined && comments.length > 0) {
            comments.map(comment => {
                const annotation = card(comment);
                article.append(annotation);
            });
        }
        div.appendChild(article);
    });
}
//# sourceMappingURL=detailsBook.js.map