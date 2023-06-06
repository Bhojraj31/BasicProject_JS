const interviewQuestion = (name) =>{
    if(name == "Bss"){
        return function(topic){
            console.log(`Hii ${name}, what is ${topic}? Plz explain us`);
        }
    }
    if(name == "Singh"){
        return function(topic){
            console.log(`Hii ${name}, what is ${topic}? Plz explain us`);
        }
    }
    if(name == "Shekhawat"){
        return function(topic){
            console.log(`Hii ${name}, what is ${topic}? Plz explain us`);
        }
    }else{
        return function(){
            console.log("Welcome Sa");
        }
    }
}
interviewQuestion("Bss")("Js");
interviewQuestion("Singh")("ReactJs");
interviewQuestion("Shekhawat")("NodeJs");
interviewQuestion("Ass")("Jss");