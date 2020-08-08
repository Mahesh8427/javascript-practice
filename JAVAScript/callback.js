////////////////////////////////////////
function print(mak) {
    this.Name = mak.name;
    this.Gender =mak.gender;

    if (this.Gender == 'male') {
        console.log(" Mr."+ mak.name);
    } else {
        console.log(" Mrs. " + mak.name);
    }
}

function show(callback) {
    let person = { name: "Jhon", gender: "male" }
    callback(person);
}
show(print);

////////////////////////////////


function print(mak) {

    if (this.gender == 'male') {
        console.log(" Mr."+ mak.name);
    } else {
        console.log(" Mrs. " + mak.name);
    }
}

function show(callback) {
    let person = { name: "Jhon", gender: "male" }
    callback(person);
}
show(print);


////////////////////////////////////////

function show(callback) {
    var name =  "Jhon"
    var gender = "male"
    callback(name,gender);
}
show(function(n,g) {
    this.Name = n;
    this.Gender =g;

    if (this.Gender == 'male') {
        console.log(" Mr."+ this.Name);
    } else {
        console.log(" Mrs. " + this.name);
    }
});

              








