const axios = require("axios");



async function add() {
  const responseReq = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities')
  console.log(responseReq)
}

add();
