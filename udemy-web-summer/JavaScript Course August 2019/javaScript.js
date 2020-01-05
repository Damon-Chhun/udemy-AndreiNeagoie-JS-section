
/*
 function checkDriverAge() {
    var age = prompt("How old are you?");
if (age > 18) {
    return alert("Powering on. Enjoy the ride!");
}
else if (age === 18) {
    return alert("Congratulations on your first year of driving. Enjoy the ride!");
}

else if (age < 18) {
    return alert("Sorry, you are too young to drive this car. Powering off");
} 
}

var checkDriverAge2 = function() {
    var age = prompt("How old are you?");
    if (Number(age) > 18) {
        return alert("Powering on. Enjoy the ride!");
    }
    else if (Number(age) === 18) {
        return alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    
    else if (Number(age) < 18) {
        return alert("Sorry, you are too young to drive this car. Powering off");
    } 
}

function checkDriverAge3(age) {
    console.log(age);
    if (age > 18) {
        return alert("Powering on. Enjoy the ride!");
    }
    else if (age === 18) {
        return alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    
    else if (age < 18) {
        return alert("Sorry, you are too young to drive this car. Powering off");
    } 
    } 
    
    var array = ["Banana", "Apples", "Oranges", "Blueberries"] ;

    array.shift(); 
    array.splice(1,1);
    array.push("Oranges");
    array.push("Kiwi");
    array.shift();
    array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]]; 

 var User = {
    Username: "TheKingBaby",
    Password: "QuitPlayin",
    }

var database = [
    User
]

var News1 = {
    Username: "TheKingBaby1",
    Timeline: "QuitPlayinbaby",
}
var News2 = {
    Username: "TheKingBaby2",
    Timeline: "QuitPlayinbaby2",
}
var News3 = {
    Username: "TheKingBaby3",
    Timeline: "QuitPlayinbaby3",
}

var newsfeed = [
    News1, News2, News3
] 
*/
var database = [
    {
        Username: "TheKing",
        Password: "TopSecret",
    },
    {
        Username: "TheQueen",
        Password: "Mugen",
    },
    {
        Username: "ThePrince",
        Password: "Nismo",
    },
]

var newsfeed = [
    {
        User: "Smallfry", 
        Status: "I'm such a scrub oh my gawwd on gaw!",
    },
    {
        User: "Bigfry",
        Status: "I'm such a beast omfg!",
    }
]

var userPrompt = prompt("What is you Username?");
var passPrompt = prompt("What is your password?");

signin(userPrompt, passPrompt);

function isUserValid(userPrompt, passPrompt) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].Username === userPrompt && database[i].Password === passPrompt) {
            return true;
        } 
    }
    return false; 
}

function signin(userPrompt, passPrompt) {
    if(isUserValid(userPrompt, passPrompt)) {
        console.log(newsfeed);
    } 
    else {
        alert("Sorry, wrong username and password. Please try again.")
    }
}
   
   

    /*if (userPrompt === database.Username && passPrompt === database.Password) {
    console.log(newsfeed);
    }
    else {
        alert("Sorry, wrong username and password")
    }
}

signin(userPrompt, passPrompt); 
*/
/*
var toDoList = [
    "Wake up", 
    "Clean room",
    "Exercise",
    "Code",
    "League",
]

for (var i = 0; i < toDoList.length; i++) {
    console.log(i, toDoList)
}; 
var counterOne = 0 
while (counterOne < 10){
    console.log(counterOne);
    counterOne++;
}
*/
 