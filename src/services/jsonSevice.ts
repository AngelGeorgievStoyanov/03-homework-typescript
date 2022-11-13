const apiJson = 'http://localhost:3000';


export async function getAllFavorites() {

    const data = await fetch(`${apiJson}/posts`);
    return data.json();
}