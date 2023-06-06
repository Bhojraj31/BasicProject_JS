// String Methods

// String length()
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

console.log(length);

// String slice()
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);

console.log(part);

// String subslice()
let text2 = "Apple, Banana, Kiwi";
let part1 = text2.substring(0, 13);

console.log(part1);

// String substr()
let str = "Apple, Banana, Kiwi";
let part2 = str.substr(-12);
// let part = str.substr(7);
// let part = str.substr(-4);

console.log(part2);

// Replacing String Content
let text3 = "Please visit Microsoft!";
let newText = text3.replace("Microsoft", "W3Schools");

console.log(newText);

let text4 = "Please visit Microsoft and Microsoft!";
let newText1 = text4.replace("Microsoft", "W3Schools");

console.log(newText1);