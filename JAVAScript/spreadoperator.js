// (Practice-1)  How spread operator performing in array and objects. biscally it is add a array element and objects in attriutes  
let arr = ['a', 'b', 'c'];
let arr2 = [...arr, 'd'];

console.log(arr);
console.log(arr2);

Objects
let person = { name: "Jacks", gender: "male", maritalStatus: "umarried" }
let person1 = { ...person, nameF: "Mak", other: "female", Status: "Married" }
let person2 = { ...person, ...person1 }
console.log(person2)

/(Practice-2)

function sum(x, y, z, a) {
    return x + y + z + a;
}
const numbers = [1, 2, 3, 4];
console.log(sum(...numbers));

//console.log(sum.apply(null, numbers));
