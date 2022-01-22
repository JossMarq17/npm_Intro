const axios = require('axios');
const { get } = require('http');

async function makePostRequest() {

    params = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
      }

      //let res = await;

    console.log(res.data);
}

makePostRequest();
