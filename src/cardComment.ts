import { elem } from "./createElement.js";
import { Comment } from "./interfaces/comment.js";

export function card(comment:Comment) {
    const divCard = elem('div', 'cardComent', 'false', 0, 0, 'false', comment.id);
   
    const h2 = elem('h2', 'false', 'Title ot the comment', 0, 0, 'false', 'false');
   
    const h3 = elem('h3', 'false', 'Description', 0, 0, 'false', 'false');
   
    const h4 = elem('h4', 'false', comment.title, 0, 0, 'false', 'false');
   
    const p = elem('p', 'false', comment.description, 0, 0, 'false', 'false');
   
    const h6 = elem('h6', 'false', 'Comment created on :' + comment.timeCreated, 0, 0, 'false', 'false');
   
    const span = elem('span', 'spanBtnscomment','false', 0, 0, 'false', 'false');
    const btnEdit = elem('button', 'editComment', 'EDIT', 0, 0, 'false', 'false');
    const btnDlt = elem('button', 'delComment', 'DELETE', 0, 0, 'false', 'false');

    divCard.appendChild(h2);
    divCard.appendChild(h4);
    divCard.appendChild(h3);
    divCard.appendChild(p);
    divCard.appendChild(h6);
   
    let h6Edit;
  
    if (comment.timeEdited != false) {
      
        h6Edit = elem('h6', 'false', 'Comment edited on :' + comment.timeEdited, 0, 0, 'false', 'false');
       
        divCard.appendChild(h6Edit);
    }
  
    span.appendChild(btnEdit);
    span.appendChild(btnDlt);
  
    divCard.appendChild(span);

    return divCard;

}