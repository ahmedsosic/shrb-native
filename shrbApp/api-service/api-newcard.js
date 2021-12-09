export default async function newCard(token, fields) {
    return fetch ('https://shrb2.herokuapp.com/api/cards/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
          
        },
        body: JSON.stringify(fields)
      })
      .then((response) => response.json()) 
 
};
