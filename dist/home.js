var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { elem } from './createElement.js';
import { getAllFavorites } from './services/jsonSevice.js';
const query = document.getElementById('search');
export function home(arrBook, div) {
    return __awaiter(this, void 0, void 0, function* () {
        const idBooki = yield getAllFavorites();
        if (idBooki.length > 1) {
            const btnMyFav = document.getElementById('myFav');
            btnMyFav.style.display = 'block';
        }
        query.value = '';
        arrBook.forEach(e => {
            const idBook = e['id'];
            const hasFavorit = idBooki.some((x) => x['id'] == idBook);
            const section = elem('section', 'home-section', 'false', 0, 0, 'false', idBook);
            const text = e['volumeInfo']['title'];
            const h3 = elem('h3', 'false', text, 0, 0, 'false', 'false');
            if (text.length > 45) {
                h3.textContent = text.substring(0, 45) + '...';
            }
            else {
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
            }
            else {
                section.appendChild(buttonFavorits);
            }
            section.appendChild(buttonDtls);
            div.appendChild(section);
        });
    });
}
//# sourceMappingURL=home.js.map