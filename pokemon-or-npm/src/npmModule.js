const fetch = require('node-fetch');

const url = 'https://pokeapi.co/api/v2/'
const response = fetch(url)

console.log(response);