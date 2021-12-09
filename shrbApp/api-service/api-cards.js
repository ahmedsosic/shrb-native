export default async function getCards(token) {
    return fetch ('https://shrb2.herokuapp.com/api/cards/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`}
      })
      .then((response) => response.json()) 
 
};
