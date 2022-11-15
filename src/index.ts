import { getAllBoks } from './services/bookServices.js';
import { home } from './home.js';
import { clearDiv } from './clearDiv.js'
import { getAllFavorites } from './services/jsonSevice.js';
import { favorites } from './myFavorites.js';
import { Book } from './interfaces/book.js';
import {targetButton} from './eventTarget.js'
import { BookDetails } from './interfaces/detailsBook.js';
const query = (<HTMLInputElement>document.getElementById('search'));
const btnSearch = (<HTMLButtonElement>document.getElementById('searchFunc'));
const btnMyFav = <HTMLButtonElement>document.getElementById('myFav')
btnMyFav.style.display = 'none';
btnMyFav.addEventListener('click', function (e: Event) { myFavorites(e) });


const div = <HTMLElement>document.getElementById('result');
div.addEventListener('click', function(e:Event) {checkEventTarget(e)});

const divCildren = div.childNodes;

btnSearch!.addEventListener('click', function (e) { if (query.value.trim() != '') { init(query.value.trim(), e) } });
let arr: [] | [];

async function start() {

    const idBooki = await getAllFavorites();

    if (idBooki.length > 1) {
        btnMyFav.style.display = 'block';

    }
}

start()





async function init(data: string, e: Event) {
    e.preventDefault();



    if (divCildren.length > 0) {
        clearDiv(divCildren);

    }


    const books = await getAllBoks(data);
    arr = books;

    home(arr, div);
}


async function myFavorites(e: Event) {
    e.preventDefault();

    const booksFav: Book[] = await getAllFavorites();

   

    if (divCildren.length > 0 && divCildren != undefined) {
        clearDiv(divCildren);
    }


    const arr = booksFav.map(async (e) => {
        const book: string = await favorites(e.id);
        if (typeof book == 'object') {
            return book

        }


    });

    const arrf:BookDetails|any = await Promise.all(arr).then((values) => {
        return values;
    });

    console.log(arrf)


   
        home(arrf, div);
  


}


async function checkEventTarget(e:Event){
    e.preventDefault()

    targetButton(e)
}