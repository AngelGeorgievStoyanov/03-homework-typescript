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
const query = document.getElementById('search');
const btnSearch = document.getElementById('searchFunc');
const div = document.getElementById('result');
btnSearch.addEventListener('click', function (e) { if (query.value.trim() != '') {
    init(query.value.trim(), e);
} });
let arr = [];
function init(data, e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const books = yield getAllBoks(data);
        arr.push(Array.from(books.items));
        home(arr[0], div);
    });
}
//# sourceMappingURL=index.js.map