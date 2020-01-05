var button = document.querySelector("#enter"); 
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var list1 = document.getElementById("1");
var list2 = document.getElementById("2");
var list3 = document.getElementById("3");
var list4 = document.getElementById("4");
var list5 = document.getElementById("5");
var list6 = document.getElementById("6");



function addNewElement () {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function checkInputValue () {
    return input.value.length > 0;
}

function addListAfterClick() {
    if (checkInputValue ()) {
        addNewElement();
}
}

function addListAfterEnter(event) {
    if (checkInputValue () && event.keyCode === 13) {
        addNewElement();
}
}


button.addEventListener("click", addListAfterClick); 
input.addEventListener("keypress", addListAfterEnter);



list1.addEventListener("click", function(){
    list1.classList.toggle ("strike");
    console.log("click1");
});

list2.addEventListener("click", function(){
    list2.classList.toggle ("strike");
    console.log("click2");
});


list3.addEventListener("click", function(){
    list3.classList.toggle ("strike");
    console.log("click3");
});

list4.addEventListener("click", function(){
    list4.classList.toggle ("strike");
    console.log("click4");
});

list5.addEventListener("click", function(){
    list5.classList.toggle ("strike");
    console.log("click5");
});

list6.addEventListener("click", function(){
    list6.classList.toggle ("strike");
    console.log("click6");
});


