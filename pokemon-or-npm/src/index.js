const askname = require('./askName');
const getPackageNpm = require('./npmModule')


// console.log(`name: ${name}`)

async function main() {
    const name = askname();
    const response = await getPackageNpm(name);
    console.log(response);
}

main();