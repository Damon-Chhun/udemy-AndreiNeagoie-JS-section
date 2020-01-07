//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// ANSWER var experiencePoints = experienceResults("winBattle") ? "10" : "1";


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

// ANSWER: Undefined (break comes before "whatHappens")

//#3 return value when moveCommand("back");

// ANSWER: "you arrived home"

//#4 return value when moveCommand("right");

// ANSWER :"You found a river"

//#5 return value when moveCommand("left");

// ANSWER :Undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// ANSWER: My own Switch Function

function animalSounds(animal) {
    var whatHappens;
    switch(animal){
        case("Cow"):
        whatHappens = "MOoooooOOOOO!";
        break;
    
        case("Dog"):
        whatHappens = "WOOF WOOF WOOF!";
        break;
    
        case("Chicken"):
        whatHappens = "POCK POCK POCK POCK!";
        break;

        case("Pig"):
        whatHappens = "Oink Oink!";
        break;
        default:
            whatHappens = "Invalid Answer. Please choose from a Cow, Dog, Chicken, or Pig.";

    }
    return whatHappens
}