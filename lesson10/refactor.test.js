const axios = require('axios')
const validator = require('jsonschema');
const usersSchema = require('./schemas/post-users-v1.json');
const {sendHttpRequest} = require("./helpers/sendHttpRequest");

describe.only('Api test', () => {

  let responseGet;
  let responsePost;

  beforeAll(async () => {

    const getParams = {
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Users'
    }
    responseGet = await sendHttpRequest(getParams)

    const postParams = {
      url: 'https://fakerestapi.azurewebsites.net/api/v1/Users',
      data: {
        id:0,
        userName:"string",
        password: "string"
      },
      headers: {
        "Content-Type": "application/json; v=1.0",
      }
    }
    responsePost = await sendHttpRequest(postParams, "POST")
    console.log(responsePost)
  })

  test('GET should be able to list of users', async () => {
    await expect(responseGet.status).toEqual(200);
    await expect(responseGet.data).toBeTruthy();
  })

  test('GET should be able to list of users', async () => {
    await expect(responseGet.status).toEqual(200);
    await expect(responseGet.data).toBeTruthy();
  })

  test('POST should be able to list of users', async () => {
    await expect(responsePost.status).toEqual(200);
    await expect(responsePost.data).toBeTruthy();
    await expect(responsePost.data.id).toEqual(0);
    await expect(responsePost.data.userName).toEqual('string');
    await expect(responsePost.data.password).toEqual('string');
  })

  test('POST should be able to list of users', async () => {
    await expect(responsePost).toBeValidSchema(usersSchema);
  })
});