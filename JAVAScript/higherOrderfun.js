//Pratice(2) with Arrow Function...
const Product = (name) => {
    if (name === "Clay_Tandoor") {
        return (Price) => {
            console.log("The Product name " + (name) + " and price is Rs. " + (Price));
        }
    } if (name === "Square_Tandoor") {
        return (Price) => {
            console.log("The Product name " + (name) + " and price is Rs. " + (Price));
        }
    } if (name === "Steel_Tandoor") {
        return (Price) => {
            console.log("The Product name " + (name) + " and price is Rs. " + (Price));
        }
    } if (name === "Round_Tandoor") {
        return (Price) => {
            console.log("The Product name " + (name) + " and price is Rs. " + (Price));
        }
    } if (name === "Copper_Tandoor") {
        return (Price) => {
            console.log("The Product name " + (name) + " and price is Rs. " + (Price));
        }
    } else {
        return (Price) => {

            console.log(" Thank you ")
        }
    }
}
Product("Clay_Tandoor")(8200000)
Product("Square_Tandoor")(8200000)
Product("Steel_Tandoor")(8200000)
Product("Ring_Tandoor")(8200000)
Product("Copper_Tandoor")(8200000)

// //Pratice(3)..
// const person = function (objects, callback) {
//     callback(objects.name, objects.topic)
// }
// function person1(callback) {
//     let person = [{ name: " jak ", topic: "javaScript ?" }, { name: " mak ", topic: "corejava ?" }, { name: " Alina ", topic: "Nodejs ?" }];
//     for (var i = 0; i < person.length; i++) {
//         callback(person[i], function (name, Topic) {
//             console.log(" Hii " + (name) + " What is " + (Topic) + " please Explain us.");
//         }

//         )
//     }
// };
//     person1(person);

