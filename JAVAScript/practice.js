//Pratice(1)........
const person = function(objects, callback) {
    if (objects.name === "jak" && objects.Topic === "javascript") {
         return function(topic) {console.log(" Hii " + (objects.name) + " What is " + (topic) + " please Explain us. ")};
    } else {
        console.log("Thank you so much");
    }
callback(objects.name,objects.Topic)
}
function cand1(callback) {
    let s = { name: "jak", Topic: "javascript" }
     var result = callback(s, function(name,topic) {
        console.log(" Hii " + (name) + " What is " + (topic) + " please Explain us. ")
    });result("javascripts")
    
}
cand1(person);






// const mak = (object, cb) => {
//     cb(object.name, object.p);
// }


// function jak(callback) {
//     let person = [{ name: "Clay_Tandoor", p: 2000 }, { name: "Square_Tandoor", p: 2000 }, { name: "Steel_Tandoor", p: 2000 }, { name: "Round_Tandoor", p: 2000 }, { name: "Copper_Tandoor", p: 8000 }]
//     for (let i = 0; i < person.length; i++) {
//         callback(person[i], function (name, Price) {
//             console.log("The Product name " + (name) + " and price is Rs. " + (Price));
//         });
//     }

// }
// jak(mak);
