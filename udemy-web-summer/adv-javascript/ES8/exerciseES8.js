// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';       
let rabbit = '🐇';

// ANSWER: 
// turtle = turtle.padStart(10);
// rabbit = rabbit.padStart(10);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// ANSWER: when running turtle = turtle.trim().padEnd(9, '='); the spaces that were initially before the turtle get 'trimmed' and 9 spaces are added at the end AND are each filled by a '='

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

//ANSWER: 
Object.entries(obj).map(string => {
  return string.join(' ');
}).join(' ')