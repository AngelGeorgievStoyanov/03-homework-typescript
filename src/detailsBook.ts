import { elem } from './createElement.js'
import { addCommentForm } from './formComments.js';
import { Book } from './interfaces/book.js';
import { BookDetails } from "./interfaces/detailsBook.js";
import { getAllCommentByBookId, getAllFavorites } from './services/jsonSevice.js';
import { Comment } from './interfaces/comment.js';
import { card } from './cardComment.js';


export async function detailsPage(bookObj: BookDetails, div: HTMLElement) {

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
    const img = elem('img', 'false', 'false', 0, 0, src!, 'false');
    const section = elem('section', 'sectionButtons', 'false', 0, 0, 'false', 'false')
    const btnBackHome = elem('button', 'btnBackToHome', 'BACK TO HOME', 0, 0, 'false', 'false');
    const btnBackFav = elem('button', 'btnBackToFav', 'BACK TO FAVORITES', 0, 0, 'false', 'false');
    const btnComment = elem('button', 'btnCmnt', 'Add coment', 0, 0, 'false', 'false')

    const hasFav = await getAllFavorites();

    const hasFavorit = hasFav.filter((x: Book) => x.id == idBook);

    article.appendChild(h1);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(img);
    article.appendChild(p);
    section.appendChild(btnBackHome);

    if (hasFav.length > 0) {

        section.appendChild(btnBackFav);
    }

    if (hasFavorit.length > 0) {

        section.appendChild(btnComment);
    }


    article.appendChild(section);

    const divForm = elem('div', 'div-form', 'false', 0, 0, 'false', 'false')

    const form = await addCommentForm();

    divForm.append(form)

    article.appendChild(divForm);

    const comments: Comment[] = await getAllCommentByBookId(idBook);


    if (comments != undefined && comments.length > 0) {


        comments.map(comment => {

            const annotation = card(comment);

            article.append(annotation);
        });

    }

    div.appendChild(article);
}