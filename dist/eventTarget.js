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
import { detailsPage } from "./detailsBook.js";
import { home } from "./home.js";
import { allMyFavorites } from "./myFavPage.js";
import { getBookById } from "./services/bookServices.js";
const div = document.getElementById('result');
const divCildren = div.childNodes;
export function targetButton(e, arrLastSearch) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const classTarget = e.target.className;
        const id = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
        if (classTarget == 'btnDtls') {
            if (divCildren.length > 0) {
                clearDiv(divCildren);
            }
            const book = yield getBookById(id);
            console.log(book, '-------');
            detailsPage(book, div);
        }
        else if (classTarget == 'btnBackToHome') {
            clearDiv(divCildren);
            home(arrLastSearch, div);
        }
        else if (classTarget == 'btnBackToFav') {
            clearDiv(divCildren);
            allMyFavorites(e);
        }
        else if (classTarget == 'btnCmnt') {
            const form = (_c = (_b = e.target.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.childNodes[6].childNodes[0];
            form.style.display = '';
        }
    });
}
//# sourceMappingURL=eventTarget.js.map