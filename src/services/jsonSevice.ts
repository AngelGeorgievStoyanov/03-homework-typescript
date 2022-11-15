import {Comment} from '../interfaces/comment.js'


const apiJson = 'http://localhost:3000';


export async function getAllFavorites() {

    const data = await fetch(`${apiJson}/posts`);
    const res = await data.json();

    return res
}


export async function addToFavorites(id: string, title: string, author: string) {
    const response = await fetch(`${apiJson}/posts`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ id, title, author })
    });
    const result = await response.json();
    return result;

}



export async function deleteFavoritesId(id: string) {

    const response = await fetch(`${apiJson}/posts/${id}`, {
        method: 'DELETE'

    });

    return response;
}

export async function createComments(id: string, title: string, description: string, timeCreated: string, timeEdited: boolean | string, bookId: string) {
    const response = await fetch(`${apiJson}/comments`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ id, title, description, timeCreated, timeEdited, bookId })
    });
    const result = await response.json();
    return result;

}



export async function getAllCommentByBookId(bookId: string) {
    const data = await fetch(`${apiJson}/comments?bookId=${bookId}`);
    const res = await data.json();

    return res
}

export async function deleteAllCommentsByBookId(bookId: string) {

    const response = await fetch(`${apiJson}/comments?bookId=${bookId}`);

    const arrComment = await response.json()
    arrComment.map(async(x:Comment)=>await deleteCommentById(x.id))

}


export async function deleteCommentById(id:string) {
    const response = await fetch(`${apiJson}/comments/${id}`, {
        method: 'DELETE'

    });
   
    return response;
}


