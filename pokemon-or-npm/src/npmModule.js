const fetch = require('node-fetch');


const getPackageNpm = async () => {
    const url = 'https://pokeapi.co/api/v2/'
    const response = await fetch(url)
    return response;
}

module.exports = getPackageNpm;