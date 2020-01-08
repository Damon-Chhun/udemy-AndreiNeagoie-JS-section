// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//Answer:
const newArray1 = [];
const forEach = array.forEach((users) => {
   newArray1.push(users.username + "!")
})

//Create an array using map that has all the usernames with a "? to each of the usernames
//Answer: 
const mapArray = array.map((users) => {
  return users.username + '?'
})

//Filter the array to only include users who are on team: red
//ANSWER: 
const filterArray = array.filter((users) => {
  return users.team === "red"
})

//Find out the total score of all users using reduce
// ANSWER: 
const totalScore = array.reduce((accumulator, users) => {
  return accumulator + users.score 
}, 0)

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
}
// ANSWER: i = index of array
const arrayNum = [1, 2 , 4, 5, 8, 9]
const pureArray = arrayNum.map((num) => {
  return num * 2
})
console.log('pure map', pureArray)
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
//ANSWER:
const bonusArray = array.map((users) => {
  newUserItems = users.items.map((item) => {
      return item + '!'
  })
  return newUserItems
});
Console.log(bonusArray);