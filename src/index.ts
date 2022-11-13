import { getAllBoks } from './services/bookServices.js';
import {home} from './home.js'
const query = (<HTMLInputElement>document.getElementById('search'));
const btnSearch = (<HTMLButtonElement>document.getElementById('searchFunc'));
// const btnMyFav = document.getElementById('myFav')


 const div =<HTMLElement> document.getElementById('result');

btnSearch!.addEventListener('click', function (e) { if (query.value.trim() != '') { init(query.value.trim(), e) } });
let arr:any[]=[];



async function init(data: string, e: Event) {
    e.preventDefault();



    // if (divCildren.length > 0) {
    //     clearDiv(divCildren);

    // }


    const books = await getAllBoks(data);
   arr.push(Array.from(books.items));

     home(arr[0], div);
}