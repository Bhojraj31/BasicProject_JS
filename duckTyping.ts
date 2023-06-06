interface Identify{
    email_id:String,
    phone_no:Number
}

function getClgInformation(student: Identify , parents: Identify):Identify{
    return{
        email_id: "teacher@gmail.com",
        phone_no: 9782691625
    }
}

let fobj = {
    email_id: "student@gmial.com",
    phone_no: 7845129678
} 

let sobj = {
    email_id: "parents@gmial.com",
    phone_no: 8769215487
} 

console.log(getClgInformation(fobj , sobj));
