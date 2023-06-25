const express = require('express');
const app = express();
const axios = require('axios');

const accessKey = '5c13de884ececf97cf18e06a5f2d6751'; // Replace with your Fixer API access key

// Make a GET request to the Fixer API
axios.get(`http://api.exchangeratesapi.io/api/latest?access_key=${accessKey}`)
  .then(response => {
    // Handle the response
    const { data } = response;
    console.log(data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  })