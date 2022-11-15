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
import { favorites } from "./getBookFav.js";
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
        const arr = booksFav.map((x) => __awaiter(this, void 0, void 0, function* () {
            const book = yield favorites(x.id);
            if (typeof book == 'object') {
                return book;
            }
        }));
        const arrf = yield Promise.all(arr).then((values) => {
            return values;
        });
        console.log(arrf);
        home(arrf, div);
    });
}
//# sourceMappingURL=myFavPage.js.map