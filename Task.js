// Var VS Let
for (var i = 0;  i < 5; i++){
    setTimeout(() => {
       console.log(i); 
    },2000);
}


for (let i = 0;  i < 5; i++){
    setTimeout(() => {
       console.log(i); 
    },2000);
}