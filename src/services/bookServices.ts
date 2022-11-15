//import { Book } from "../interfaces/book";

// import { BookDetails } from "../interfaces/detailsBook.js";

const URL_API_BOOKS = 'https://www.googleapis.com/books/v1/volumes?q=';
const max = '&maxResults=40';

const urlBook = 'https://www.googleapis.com/books/v1/volumes/';




export async function getAllBoks(query: string) {
    const currentUrl = URL_API_BOOKS + query + max;

    const data = await fetch(currentUrl);
    const res = await data.json();
    const books = res.items
    return  books
}


export async function getBookById(id:string) {

    const book = await  fetch(urlBook + id);

    return   book.json();
}