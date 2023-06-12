// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Bhojraj",
    "full name": "Bhojraj Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "bhojraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// 
JsUser.email = "bhojraj@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "bhojraj@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

/* ********* Part-2  *********** */ 
// singleton
// const tinderUser = new Object()

// NonSingleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "bhojraj",
            lastname: "singh"
        }
    }
}

// nested obj calling
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// When we return a new object, we return a new target object." {}: targetObj "
// const obj3 = Object.assign({}, obj1, obj2, obj4)


// using spred opertor
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "bs31@gmail.com"
    },
    {
        id: 1,
        email: "bs31@gmail.com"
    },
    {
        id: 1,
        email: "bs31@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// finds keys
// console.log(Object.keys(tinderUser));

// finds value
// console.log(Object.values(tinderUser));

// using entries hum arrays milte h jisme first entry key hogi and second uski value hogi 
// console.log(Object.entries(tinderUser));

// to key the proparty of obj
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JavaScript by bss in hindi",
    price: "1500",
    courseInstructor: "bhojraj"
}

console.log(course.courseInstructor);

course.courseInstructor

// rename obj proparty
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "bhojraj",
//     "coursename": "JavaScript by bss in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]