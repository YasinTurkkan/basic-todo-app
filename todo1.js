const addButton = document.querySelector("button");
const showToDo = document.querySelector(".showToDo");
const inputToDo = document.querySelector(".userInput");

const ul = document.querySelector(".showUl");
let counter = 0;


addButton.addEventListener("click", function() {
  counter++;

  if (inputToDo.value === "") {
    alert("Please write something");
  }

  let newLi = document.createElement("li");
  const liContent = document.createTextNode(inputToDo.value);
  // new added to do added to licontent
  newLi.append(liContent);
  // newly added li content append to the ul
  ul.append(newLi);

  // reset the value
  inputToDo.value = "";

  // we are crossing when we click on to do
  newLi.addEventListener("click", function () {
    newLi.style.textDecoration = "line-through";
  });

  // we are crossing when we click on to do
  newLi.addEventListener("dblclick", function () {
    ul.removeChild(newLi);
  });
});
