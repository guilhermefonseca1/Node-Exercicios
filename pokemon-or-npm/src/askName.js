const readline = require('readline-sync');

const askname = () => {
    const name = readline.question('Digite um nome:');
    return name;
}

module.exports = askname;