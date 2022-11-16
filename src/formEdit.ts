import { elem } from "./createElement.js";
import { Comment } from "./interfaces/comment.js";


export async function editForm(comment: Comment) {


    const form = elem('form', 'form-edit', 'false', 0, 0, 'false', 'false');

    const h3 = elem('h3', 'false', 'Comment title', 0, 0, 'false', 'false');

    const inpTitle = elem('input', 'form-comment-input-title', 'false', 0, 0, 'false', 'false');
    inpTitle.setAttribute('maxlength', '40');
    (<HTMLInputElement>inpTitle).value = comment.title;

    const h3desc = elem('h3', 'false', 'Description', 0, 0, 'false', 'false');

    const txtArea = elem('textarea', 'form-comment-txtarea-title', 'false', 0, 0, 'false', 'false');
    txtArea.setAttribute('rows', '8');
    txtArea.setAttribute('cols', '40');
    txtArea.setAttribute('maxlength', '256');
    (<HTMLTextAreaElement>txtArea).value = comment.description;

    const btnForm = elem('button', 'editingComment', 'Edit comment', 0, 0, 'false', 'false');

    form.append(h3);
    form.append(inpTitle);
    form.append(h3desc);
    form.append(txtArea);
    form.append(btnForm);

    return form;

}