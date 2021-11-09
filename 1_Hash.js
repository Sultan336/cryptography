const { createHash } = require('crypto');

// create a string hash

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = "Hey";
const hash1 = hash(password);
console.log("#: ", hash1);


const hash2 = hash(password);
const match = hash1 === hash2
console.log(match ? '✔️' : '❌');