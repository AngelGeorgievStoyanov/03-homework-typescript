import { clearDiv } from "./clearDiv.js";
import { detailsPage } from "./detailsBook.js";
import { BookDetails } from "./interfaces/detailsBook.js";
import { getBookById } from "./services/bookServices.js";

const div = <HTMLElement>document.getElementById('result');
const divCildren = div.childNodes

export async function targetButton(e: Event) {
    const classTarget = (<HTMLElement>e.target).className
    const id:string|undefined  = (e.target as Element).parentElement?.id;
   
    if (classTarget == 'btnDtls') {

        if (divCildren.length > 0) {
            clearDiv(divCildren);
        }

          const book =<BookDetails> await getBookById(id!);
       console.log( book,'-------')

        //  const postComm = await getPostById(id);

         detailsPage(book, div);

    }
}


