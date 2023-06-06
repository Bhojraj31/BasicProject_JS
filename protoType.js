let a = {
    name : "bhojraj",
    age : "23"
}

let b = {
    run : () =>{
        console.log("hello bhojraj");
    }
}
a.__proto__ = b 
a.run();