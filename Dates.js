const myDates = new Date()

console.log(myDates);  // 2023-06-07T06:24:59.071Z
console.log(myDates.toString());    // Wed Jun 07 2023 11:54:59 GMT+0530 (India Standard Time)
console.log(myDates.toDateString());    // Wed Jun 07 2023
console.log(myDates.toISOString());     // 2023-06-07T06:24:59.071Z
console.log(myDates.toJSON());          // 2023-06-07T06:24:59.071Z
console.log(myDates.toLocaleDateString());  // 7/6/2023
console.log(myDates.toTimeString());    // 11:54:59 GMT+0530 (India Standard Time)


// Created Date
let myCreated = new Date(2000, 1, 2, 6, 50, 1);
console.log(myCreated.toLocaleString());    // 2/2/2000, 6:50:01 am