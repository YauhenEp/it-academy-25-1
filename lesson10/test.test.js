const axios = require('axios')
const validator = require('jsonschema');
const usersSchema = require('./schemas/post-users-v1.json');

describe('Api test', () => {
  test('GET should be able to list of users', async () => {
    const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users')
    console.log(response)
    await expect(response.status).toEqual(200);
    await expect(response.data).toBeTruthy();
  })

  // test('GET should be able to list of users', async () => {
  //   const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Users')
  //   console.log(response)
  //   await expect(response.status).toEqual(200);
  //   await expect(response.data).toBeTruthy();
  // })

  test.only('POST should be able to list of users', async () => {
    const response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users', {
      id:0,
      userName:"string",
      password: "string"
    } , {
      headers: {
        "Content-Type": "application/json; v=1.0",
      }
    })
    console.log(response)
    await expect(response.status).toEqual(200);
    await expect(response.data).toBeTruthy();
    await expect(response.data.id).toEqual(0);
    await expect(response.data.userName).toEqual('string');
    await expect(response.data.password).toEqual('string');
  })

  test.only('POST should be able to list of users', async () => {
    const response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Users', {
      id:0,
      userName:"string",
      password: "string"
    } , {
      headers: {
        "Content-Type": "application/json; v=1.0",
      }
    })
    const result = await validator.validate(response.data, usersSchema)
    console.log(result)
    await expect(result.valid).toEqual(true);
  })
});