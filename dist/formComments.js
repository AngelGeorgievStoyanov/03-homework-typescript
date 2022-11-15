var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { elem } from "./createElement.js";
export function addCommentForm() {
    return __awaiter(this, void 0, void 0, function* () {
        const form = elem('form', 'form-addcomment', 'false', 0, 0, 'false', 'false');
        form.style.display = 'none';
        const h3 = elem('h3', 'false', 'Comment title', 0, 0, 'false', 'false');
        const inpTitle = elem('input', 'form-comment-input-title', 'false', 0, 0, 'false', 'false');
        inpTitle.setAttribute('maxlength', '40');
        const h3desc = elem('h3', 'false', 'Description', 0, 0, 'false', 'false');
        const txtArea = elem('textarea', 'form-comment-txtarea-title', 'false', 0, 0, 'false', 'false');
        txtArea.setAttribute('rows', '8');
        txtArea.setAttribute('cols', '40');
        txtArea.setAttribute('maxlength', '256');
        const btnForm = elem('button', 'btnComent', 'Create comment', 0, 0, 'false', 'false');
        form.append(h3);
        form.append(inpTitle);
        form.append(h3desc);
        form.append(txtArea);
        form.append(btnForm);
        return form;
    });
}
//# sourceMappingURL=formComments.js.map