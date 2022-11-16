import { elem } from './createElement.js'
import { getAllFavorites } from './services/jsonSevice.js';

const query = (<HTMLInputElement>document.getElementById('search'));

export async function home(arrBook: [], div: HTMLElement) {

    const idBooki: [] = await getAllFavorites();



    if (idBooki.length > 1) {
        const btnMyFav = <HTMLElement>document.getElementById('myFav');
        btnMyFav.style.display = 'block';

    }

    query.value = '';

    if (arrBook != undefined) {


        arrBook.forEach(e => {


            const idBook = e['id'];

            const hasFavorit: boolean = idBooki.some((x) => x['id'] == idBook);

            const section = <HTMLElement>elem('section', 'home-section', 'false', 0, 0, 'false', idBook);


            const text: string = e['volumeInfo']['title'];
            const h3 = <HTMLElement>elem('h3', 'false', text, 0, 0, 'false', 'false');

            if (text.length > 45) {

                h3.textContent = text.substring(0, 45) + '...';

            } else {

                h3.textContent = text;

            }
            const src = e['volumeInfo']['imageLinks']['smallThumbnail'];
            const img = elem('img', 'false', 'false', 128, 158, src, 'false');
            const buttonFavorits = elem('button', 'btnFav', 'Favorits', 0, 0, 'false', 'false');
            const buttonRemove = elem('button', 'btnRmv', 'Remove', 0, 0, 'false', 'false');
            const buttonDtls = elem('button', 'btnDtls', 'Details', 0, 0, 'false', 'false');


            section.appendChild(h3);
            section.appendChild(img);

            if (hasFavorit) {
                section.appendChild(buttonRemove);

            } else {

                section.appendChild(buttonFavorits);
            }

            section.appendChild(buttonDtls);

            div.appendChild(section);

        });
    }

}