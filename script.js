function burgerFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}

import { sayHello } from "./sayHello.js";


sayHello();

import { todoApplication } from "./todoApplication.js";

const addTaskButton = document.querySelector("#addTaskButton");

addTaskButton.addEventListener("click", todoApplication)

