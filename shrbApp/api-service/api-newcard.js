export default async function newCard(token, fields) {
    return fetch ('http://e420-2a02-27b0-5502-3b70-b01a-b8c3-f367-c92e.ngrok.io/api/cards/', {
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
