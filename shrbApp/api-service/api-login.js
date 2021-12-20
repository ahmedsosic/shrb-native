export default async function getToken(username, password) {
    return fetch ('https://shrb2.herokuapp.com/api/token/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify(
         { username: username,
           password: password
          }
        )
      })
          .then( response => response.json())
          .catch ( error => console.log(error));
};
