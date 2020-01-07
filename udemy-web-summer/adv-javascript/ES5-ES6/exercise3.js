// change everything below to the newer Javascript!

// let + const
var a = 'test'; // let a = 'test'
var b = true;   // const b = true
var c = 789;    // const c = 789 
a = 'test2';    // let a = 'test2'



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName; // const {firstName} = person
var lastName = person.lastName;   // const {lastName} = person
var age = person.age;             // let {age} = person            
var eyeColor = person.eyeColor;   // const {eyeColor} = person
                                  // const { firstName, lastName, eyeColor} = person and let {age} = person

// Object properties
var a = 'test';         // const a = 'test';
var b = true;           // const b = true;
var c = 789;            // const c = 789; 

var okObj = {           // const okObj = { a , b , c }; 
}
  a: a,
  b: b,
  c: c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
// ANSWER: const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// ANSWER: const isValidAge = (age = 10) => return age;

// Symbol
// Create a symbol: "This is my first Symbol"
let myFistSymbol = Symbol('This is my first Symbol')

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// ANSWER: 
// const whereAmI = (username, location) => {
 //   if (username && location) {
 //       return "I am not lost";
 //   } else {
 //       return "I am totally lost!";
 //   }
// }