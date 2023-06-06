// Settimeout , Setinterval and requestAnimationFrame

// alert("hello");

let a = setTimeout(function () {
  alert("I am in settimeout");
}, 5000);

let b = prompt("Do you want to run the settimeout?");
if ("n" == b) {
  clearTimeout(a);
}
// clearTimeout(a);
console.log(a);


// SETINTERVAL

setInterval(function () {
    alert("I am in setinterval");
}, 2000)