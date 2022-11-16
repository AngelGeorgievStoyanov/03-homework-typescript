import { clearDiv } from "./clearDiv.js";
import { elem } from "./createElement.js";
import { favorites } from "./myFavorites.js";
import { home } from "./home.js";
import { Book } from "./interfaces/book.js";
import { BookDetails } from "./interfaces/detailsBook.js";
import { getAllFavorites } from "./services/jsonSevice.js";


const div = <HTMLElement>document.getElementById('result');
const divCildren = div.childNodes;

export async function allMyFavorites(e: Event) {
    e.preventDefault();

    const booksFav: Book[] = await getAllFavorites();



    if (divCildren.length > 0 && divCildren != undefined) {
        clearDiv(divCildren);
    }
    const divFav = <HTMLElement>elem('div', 'divFav', 'false', 0, 0, 'false', 'false');

    if (booksFav.length == 0) {
        const h1 = <HTMLElement>elem('h1', 'false', 'No books in favorites!', 0, 0, 'false', 'false');

        div.appendChild(h1);

    } else {
        div.appendChild(divFav);
        
    }
    const arr = booksFav.map(async (x) => {
        const book: string = await favorites(x.id);
        return book;
    });

    const arrf: BookDetails | any = await Promise.all(arr).then((values) => {
        return values;
    });


    home(arrf, divFav);


}