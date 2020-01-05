var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var h = 0;
 

function inputLength() {
	return input.value.length;
};

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
};

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	};
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	};
}

function addDone(){
	for (var h = 0; h<list.length ; h++) {
	list[h].classList.toggle ("done");
	console.log("click");
	

}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list[h].addEventListener("click", addDone);