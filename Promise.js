// 2 june 2023

let p1 = new Promise((resolve, reject)=>{
    console.log("promise is pending ");
    setTimeout(() => {
        // console.log("I am Promise and i am fulfilled");
        resolve(true)
        
    }, 2000);
})

// let p2 = new Promise((resolve, reject)=>{
//     console.log("promise is pending ");
//     setTimeout(() => {
//         // console.log("I am Promise and i am rejected");
//         reject(new Error("I am an error"))
//     }, 3000);
// })

// .then
p1.then((value)=>{
    console.log(value);
    let p3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Promise 3")
        }, 2000);
    })
    return p3
}).then((value)=>{
    console.log("we are done");
})
// p1.then(alert);

// .catch
// p2.catch((Error)=>{
//     console.log(Error +" error in promise");
// })

// p2.then((value)=>{
//     console.log(value);
// },(error)=>{
//     console.log(error);
// })

