import { elem } from "./createElement.js";


export async function addCommentForm() {

    const form = elem('form', 'form-addcomment','false',0,0,'false','false');
   
    form.style.display = 'none';
    const h3 = elem('h3', 'false', 'Comment title',0,0,'false','false');
    const inpTitle = elem('input', 'form-comment-input-title','false',0,0,'false','false');
    inpTitle.setAttribute('maxlength', '40');
    const h3desc = elem('h3', 'false', 'Description',0,0,'false','false');
    const txtArea = elem('textarea', 'form-comment-txtarea-title','false',0,0,'false','false');
    txtArea.setAttribute('rows', '8');
    txtArea.setAttribute('cols','40');
    txtArea.setAttribute('maxlength', '256')
    const btnForm = elem('button','btnComent','Create comment',0,0,'false','false');
    form.append(h3);
    form.append(inpTitle);
    form.append(h3desc);
    form.append(txtArea);
    form.append(btnForm);

    return form;

}