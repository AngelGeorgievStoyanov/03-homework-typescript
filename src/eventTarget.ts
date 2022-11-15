import { clearDiv } from "./clearDiv.js";
import { detailsPage } from "./detailsBook.js";
import { home } from "./home.js";
import { BookDetails } from "./interfaces/detailsBook.js";
import { allMyFavorites } from "./myFavPage.js";
import { getBookById } from "./services/bookServices.js";

const div = <HTMLElement>document.getElementById('result');
const divCildren = div.childNodes

export async function targetButton(e: Event, arrLastSearch: []) {
    const classTarget = (<HTMLElement>e.target).className
    const id: string | undefined = (e.target as Element).parentElement?.id;

    if (classTarget == 'btnDtls') {

        if (divCildren.length > 0) {
            clearDiv(divCildren);
        }

        const book = <BookDetails>await getBookById(id!);
        console.log(book, '-------')

        //  const postComm = await getPostById(id);

        detailsPage(book, div);

    } else if (classTarget == 'btnBackToHome') {
        clearDiv(divCildren);
        home(arrLastSearch, div);
    } else if (classTarget == 'btnBackToFav') {
        clearDiv(divCildren);
        allMyFavorites(e);

    } else if (classTarget == 'btnCmnt') {

        const form = (e.target as Element).parentElement?.parentElement?.childNodes[6].childNodes[0] as HTMLFormElement

        form.style.display = '';

    }
}


