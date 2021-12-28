export default async function updateCard(token, date_from, date_to, description, id) {
    return fetch (`http://shrb2.herokuapp.com/api/cards/${id}/`, {
        method: 'PUT',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,   
        }, 
        body: JSON.stringify({
            date_from: date_from,
            date_to: date_to,
            description: description
      })
      })
      .catch(err => console.log(err))
      
};
