

export default async function getToken(username, password) {
    return fetch ('http://e420-2a02-27b0-5502-3b70-b01a-b8c3-f367-c92e.ngrok.io/api/token/', {
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
