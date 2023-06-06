let counter = 1;

function demo (number){           // function with defintion 
    
    if(counter > number){
        return;
    }

    console.log("Recursion hai!!!" +counter);
    counter++;
    demo(number);                 // Recursion
}
demo(10);                     // calling