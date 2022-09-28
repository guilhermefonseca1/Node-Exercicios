const askname = require('./askName');
const getPackageNpm = require('./npmModule')

// const name =askname();

// console.log(`name: ${name}`)

async function main() {
    const response = await getPackageNpm();
    console.log(response);
}

main();