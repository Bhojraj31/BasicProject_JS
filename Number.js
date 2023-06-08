// Number Declarations 
const score = 1000
// console.log(score);

const balance = new Number(12000)
// console.log(balance);

// console.log(balance.toString());

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const OtherNumber = 23.4966

// toPrecision Number of significant digits. Must be in the range 1 - 21, inclusive. Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// console.log(OtherNumber.toPrecision());

const hundred = 10000000
// console.log(hundred.toLocaleString('en-IN'));


/********************* ++ MATHS ++ ***********************/

// console.log(Math);
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(81));
// console.log(Math.min(81,78,45,65,12,10,59));
// console.log(Math.max(81,78,45,65,12,10,59));

// imp***
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

// if we want a range between to number
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
