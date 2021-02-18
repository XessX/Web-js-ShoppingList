var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//catching or referencing li in a variable
var list=document.getElementsByTagName("li");
function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

//Create Button & text function & remove button onclick function
    var buttons=document.createElement("button");
    buttons.appendChild(document.createTextNode("Delete"));
    li.appendChild(buttons);
    buttons.onclick=removeParent;
}
//remove function to delete the list from parent node aka ul
function removeParent(ev){
     ev.target.parentNode.remove();
}
//taking length of the list
function listLength(){
     return list.length;
}
//created delete button for each list that are added
for(var i=0;i<listLength();i++){
     deleteButton();
}
// toggle function for line-through aka .done class
ul.onclick=function(event){
     var target=event.target;
     target.classList.toggle("done");
}

function addListAfterClick() {
      if (inputLength() > 0) {
          createListElement();
	 }
}

function addListAfterKeypress(event) {
      if (inputLength() > 0 && event.keyCode === 13) {
	  createListElement();
         }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
