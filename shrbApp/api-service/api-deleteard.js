export default async function deleteCard(token, id) {
    return fetch (`http://shrb2.herokuapp.com/api/cards/${id}/`, {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,   
        }
    }).catch(err => {console.log(err)})
}