

export default async function getToken(username, password) {
  console.log('aaaaaaaaa')
    return fetch ('http://c1f6-77-77-244-118.ngrok.io/api/token/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then((response) => response.json()) 
 
};