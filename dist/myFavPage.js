var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clearDiv } from "./clearDiv.js";
import { elem } from "./createElement.js";
import { favorites } from "./myFavorites.js";
import { home } from "./home.js";
import { getAllFavorites } from "./services/jsonSevice.js";
const div = document.getElementById('result');
const divCildren = div.childNodes;
export function allMyFavorites(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const booksFav = yield getAllFavorites();
        if (divCildren.length > 0 && divCildren != undefined) {
            clearDiv(divCildren);
        }
        const divFav = elem('div', 'divFav', 'false', 0, 0, 'false', 'false');
        if (booksFav.length == 0) {
            const h1 = elem('h1', 'false', 'No books in favorites!', 0, 0, 'false', 'false');
            div.appendChild(h1);
        }
        else {
            div.appendChild(divFav);
        }
        const arr = booksFav.map((x) => __awaiter(this, void 0, void 0, function* () {
            const book = yield favorites(x.id);
            return book;
        }));
        const arrf = yield Promise.all(arr).then((values) => {
            return values;
        });
        home(arrf, divFav);
    });
}
//# sourceMappingURL=myFavPage.js.map