var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllBoks } from './services/bookServices.js';
import { home } from './home.js';
import { clearDiv } from './clearDiv.js';
import { getAllFavorites } from './services/jsonSevice.js';
import { favorites } from './myFavorites.js';
import { targetButton } from './eventTarget.js';
const query = document.getElementById('search');
const btnSearch = document.getElementById('searchFunc');
const btnMyFav = document.getElementById('myFav');
btnMyFav.style.display = 'none';
btnMyFav.addEventListener('click', function (e) { myFavorites(e); });
const div = document.getElementById('result');
div.addEventListener('click', function (e) { checkEventTarget(e); });
const divCildren = div.childNodes;
btnSearch.addEventListener('click', function (e) { if (query.value.trim() != '') {
    init(query.value.trim(), e);
} });
let arr;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const idBooki = yield getAllFavorites();
        if (idBooki.length > 1) {
            btnMyFav.style.display = 'block';
        }
    });
}
start();
function init(data, e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (divCildren.length > 0) {
            clearDiv(divCildren);
        }
        const books = yield getAllBoks(data);
        arr = books;
        home(arr, div);
    });
}
function myFavorites(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const booksFav = yield getAllFavorites();
        if (divCildren.length > 0 && divCildren != undefined) {
            clearDiv(divCildren);
        }
        const arr = booksFav.map((e) => __awaiter(this, void 0, void 0, function* () {
            const book = yield favorites(e.id);
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
function checkEventTarget(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        targetButton(e);
    });
}
//# sourceMappingURL=index.js.map