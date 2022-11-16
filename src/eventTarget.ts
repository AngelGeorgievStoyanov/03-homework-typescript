import { clearDiv } from "./clearDiv.js";
import { detailsPage } from "./detailsBook.js";
import { editForm } from "./formEdit.js";
import { home } from "./home.js";
import { BookDetails } from "./interfaces/detailsBook.js";
import { allMyFavorites } from "./myFavPage.js";
import { getBookById } from "./services/bookServices.js";

import {
    addToFavorites, createComments, deleteAllCommentsByBookId,
    deleteCommentById, deleteFavoritesId, editCommentById,
    getAllFavorites, getCommentById
} from "./services/jsonSevice.js";

import { Comment } from "./interfaces/comment.js";


const div = <HTMLElement>document.getElementById('result');

const divCildren = div.childNodes;

const btnMyFav = <HTMLElement>document.getElementById('myFav');


export async function targetButton(e: Event, arrLastSearch: []) {
    
    const classTarget = (<HTMLElement>e.target).className
    
    const id: string | undefined = (e.target as Element).parentElement?.id;

    if (classTarget == 'btnDtls') {

        if (divCildren.length > 0) {
            clearDiv(divCildren);
        }

        const book = <BookDetails>await getBookById(id!);



        detailsPage(book, div);

    } else if (classTarget == 'btnBackToHome') {
        clearDiv(divCildren);
        home(arrLastSearch, div);
    } else if (classTarget == 'btnBackToFav') {
        clearDiv(divCildren);
        allMyFavorites(e);

    } else if (classTarget == 'btnCmnt') {

        const form = (e.target as Element).parentElement?.parentElement?.childNodes[6].childNodes[0] as HTMLFormElement;

        form.style.display = '';

    } else if (classTarget == 'btnFav') {
       
        btnMyFav.style.display = 'block';
       
        const book: BookDetails = await getBookById(id!);
       
        const title = book.volumeInfo.title != undefined ? book.volumeInfo.title : 'For this book missing title in db';
       
        const author = book.volumeInfo.authors != undefined ? book.volumeInfo.authors : 'For this book missing author in db';

        const bookId = book.id;

        addToFavorites(bookId, title as string, author as string);
       
        (<HTMLElement>e.target).textContent = 'Remove';
        (<HTMLElement>e.target).className = 'btnRmv';

    } else if (classTarget == 'btnRmv') {
      
        await deleteFavoritesId(id!);
        
        await deleteAllCommentsByBookId(id!);

        const books = await getAllFavorites();

        (<HTMLElement>e.target).textContent = 'Favorits';
        (<HTMLElement>e.target).className = 'btnFav';

        books.length == 0 ? btnMyFav.style.display = 'none' : btnMyFav.style.display = 'block';

        if ((<HTMLDivElement>e.target).parentElement?.parentElement?.className == 'divFav') {
           
            allMyFavorites(e)
        
        }

    } else if (classTarget == 'btnAddComment') {

        const id = (<HTMLElement>e.currentTarget).children[0].id;

        const form = (<HTMLFormElement>e.target).parentNode;

        const title = (<HTMLInputElement>form?.childNodes[1]).value.trim()
       
        const description = (<HTMLInputElement>form?.childNodes[3]).value.trim()
       
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

            }

            await createComments(comment.id, comment.title, comment.description, comment.timeCreated, comment.timeEdited, comment.bookId)

        }

        (<HTMLElement>form).style.display = 'none';

        if (divCildren.length > 0) {
          
            clearDiv(divCildren);
       
        }
       
        const book = <BookDetails>await getBookById(id!);

        detailsPage(book, div);


    } else if (classTarget == 'delComment' || classTarget == 'editComment' || classTarget == 'editingComment') {

        const idCmt = (<HTMLElement>e.target).parentElement?.parentElement?.id;
       
        const id = (<HTMLElement>e.currentTarget).children[0].id;
      
        const book = await getBookById(id);

        if (classTarget == 'delComment') {

            await deleteCommentById(idCmt!);


            if (divCildren.length > 0) {
               
                clearDiv(divCildren);
           
            }

            detailsPage(book, div);


        }
        if (classTarget == 'editComment') {

            const comment: Comment = await getCommentById(idCmt!)
           
            const divCard = (<HTMLElement>e.target).parentElement?.parentElement;

            const form = await editForm(comment);

            clearDiv(divCard!.childNodes);
           
            divCard!.appendChild(form);
        }
        if (classTarget == 'editingComment') {

            const comment: Comment = await getCommentById(idCmt!);
           
            const form = (<HTMLElement>e.target).parentNode;
           
            const title = (<HTMLInputElement>form?.childNodes[1]).value.trim();
            title.length > 40 ? title.substring(0, 40) : title;
          
            const description = (<HTMLInputElement>form?.childNodes[3]).value.trim();
            description.length > 256 ? description.substring(0, 256) : description;
          
            const timeCreated = new Date().toJSON().split('.')[0];
            let timeData = timeCreated.split('T')[0];
            const timeH = timeCreated.split('T')[1];
            timeData = timeData.split('-').reverse().join('-');
            const currentEdited = timeH + '/' + timeData;

            if (title != '' && description != '') {


                const commentEdit: Comment = {
                  
                    "id": comment.id,
                    "title": title,
                    "description": description,
                    "timeCreated": comment.timeCreated,
                    "timeEdited": currentEdited,
                    "bookId": comment.bookId
               
                }

                await editCommentById(idCmt!, commentEdit);

                if (divCildren.length > 0) {
                   
                    clearDiv(divCildren);
               
                }

                detailsPage(book, div);

            }


        }


    }



}