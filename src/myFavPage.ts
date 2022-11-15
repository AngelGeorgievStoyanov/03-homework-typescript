import { clearDiv } from "./clearDiv.js";
import { favorites } from "./getBookFav.js";
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


    const arr = booksFav.map(async (x) => {
        const book: string = await favorites(x.id);
        if (typeof book == 'object') {
            return book

        }


    });

    const arrf: BookDetails | any = await Promise.all(arr).then((values) => {
        return values;
    });

    console.log(arrf)



    home(arrf, div);



}