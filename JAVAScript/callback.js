// //CallbackFunction(1)
// function print(mak, mah) {

//     if (mak.gender == 'male' && mak.maritalStatus == 'married' || mak.maritalStatus == 'unmarried'
//         && mah.gender == 'female' && mah.maritalStatus == 'married') {
//         console.log(" Mr." + mak.name + " IS " + mak.maritalStatus);

//     } else if (mah.gender == 'female' && mah.maritalStatus == 'married') {
//         console.log(" Mrs. " + mah.name + " IS " + mah.maritalStatus);
//     } else {
//         console.log(" Miss." + mah.name + " Is " + mah.maritalStatus);
//     }
// }

// function show(callback) {
//     let person = { name: "Jacks", gender: "male", maritalStatus: "umarried" }
//     let person1 = { name: "Alina", gender: "female", maritalStatus: "unmarried" }
//     callback(person, person1);
// }
// show(print);




//CallbackFunction(2)

// function print(mak) {

//     if (mak.gender == 'female' && mak.maritalStatus == 'married') {

//         console.log(" Mrs." + mak.name);
//     } else if (mak.gender == 'female' && mak.maritalStatus == 'unmarried') {
//         console.log(" Miss." + mak.name);
//     } else {
//         console.log(" Mr. ");
//     }
// }
// function show(callback) {
//     let person = { name: "Jacks", gender: "female", maritalStatus: "unmarried" }
//     callback(person);
// }
// show(print);





// //CallbackFunction(3)
// function print(mak, greeting, callback) {
//     // console.log(callback+greeting + "! " + salutaion + " " + mak.name)
//     var salutaion = "Mr.";
//     if (mak.gender == 'female' && mak.maritalStatus == 'married') {
//         salutaion = "Mrs.";
//     } else if (mak.gender == 'female' && mak.maritalStatus == 'unmarried') {
//         salutaion = "Ms.";
//     }
//     callback(greeting + "! " + salutaion + " " + mak.name)
// };

// function show(callback) {
//     let person = { name: "Jesse", gender: "female", maritalStatus: "married" }
//     callback(person, 'Good Afternoon', function as(response) {
//         console.log(" hello " + response);
//     });
// }

// show(print);

//Pratice(2)High Oreder Function with Arrow Function and CallbackFunction(4)...
const mak = (object, cb) => {
    cb(object.name, object.p);
}


function jak(callback) {
    let person = [{ name: "Clay_Tandoor", p: 2000 }, { name: "Square_Tandoor", p: 2000 }, { name: "Steel_Tandoor", p: 2000 }, { name: "Round_Tandoor", p: 2000 }, { name: "Copper_Tandoor", p: 8000 }]
    for (let i = 0; i < person.length; i++) {
        callback(person[i], function (name, Price) {
            console.log("The Product name " + (name) + " and price is Rs. " + (Price));
        });
    }

}
jak(mak);
