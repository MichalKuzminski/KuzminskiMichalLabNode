const decamelize = require('decamelize');

const cryptoRandomString = require('crypto-random-string');
//----------------------------------------------------------------
console.log('\nFUNKCJA: *decamelize* ');
let napis = "MojeTestoweZdanie";

console.log('\nZdanie przed działaniem funkcji:'+napis);
let x =decamelize('MojeTestoweZdanie','***');
console.log('\nZdanie po działaniu funkcji: '+x);
//------------------------------------------------------------------
console.log('\nFUNKCJA: *crypto-random-string* ')
let y = cryptoRandomString({length: 10, type: 'ascii-printable'});

console.log('\nWygenerowany losowo string ASCII: '+y+'\n')