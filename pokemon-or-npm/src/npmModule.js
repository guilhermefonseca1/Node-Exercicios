const fetch = require('node-fetch');


const getPackageNpm = async (name) => {
    const url = `https://pokeapi.co/api/v2/${name}`
    const response = await fetch(url)
    return response;
}

module.exports = getPackageNpm;