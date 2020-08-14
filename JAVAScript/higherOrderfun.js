//Pratice(1)..
const person = function (name) {
    if (name === " jak ") {
        return function (topic) {
            console.log(" Hii " + (name) + " What is " + (topic) + " please Explain us.");
        }
    } else if (name === " mak ") {
        return function (topic) {
            console.log(" Hii " + (name) + " What is " + (topic) + " please Explain us.");
        }
    } else if (name === " Alina ") {
        return function (topic) {
            console.log(" Hii " + (name) + " What is " + (topic) + " please Explain us.");
        }
    } else {
        console.log("Thank you so much");
    }
}
person(" jak ")("javaScript ?");
person(" mak ")("corejava ?");
person(" Alina ")("Nodejs ?");
console.log(" Guys Please submit your details ")




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
    }else{
        return (Price)=>{

        console.log(" Thank you ")}
    }
}
Product("Clay_Tandoor")(1000);
Product("Square_Tandoor")(2000);
Product("Steel_Tandoor")(3000);
Product("Round_Tandoor")(4000);
Product("Ring_Tandoor")(4000);












