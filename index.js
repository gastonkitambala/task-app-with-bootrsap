const searchInput = document.getElementsByClassName("search-input")[0]; //added [0] since it returns an array, we want the first element
//   console.log("[Here is our input]");
//   console.log(searchInput);

let taskText;

searchInput.addEventListener("input", e => {
  // console.log(e.target.value);
  taskText = e.target.value;
});

const btnAdd = document.getElementsByClassName("btn-add")[0];

//  Get the task-list div
const taskList = document.getElementsByClassName("task-list")[0];


searchInput.addEventListener("keyup", e => {
  // Number 13 is the "Enter" key on the keyboard
if (e.keyCode === 13) {
// Cancel the default action, if needed
e.preventDefault();
// Trigger the button element with a click
createTask();
}
});
btnAdd.addEventListener("click", e => {
  createTask();
});

function createTask(){
  console.log("[Add this task:]");
  console.log(taskText);

  // create the task div
  let taskDiv = document.createElement("div");
  // add the "task" class name to the task div
  taskDiv.classList.add("task");

  // create the task-name div, add the class name
  let taskNameDiv = document.createElement("div");
  taskNameDiv.classList.add("task-name");

  // create task div content, which the name the inputted task
  let taskTextNode = document.createTextNode(taskText);

  // create the del-btn button, add the content and its class
  let taskDelBtn = document.createElement("button");
  taskDelBtn.innerHTML = "X";
  taskDelBtn.classList.add("del-btn");
  taskDelBtn.addEventListener("click", e => {
    taskDelBtn.parentElement.remove();
  })

  // append the taskTextNode to the taskName Div
  taskNameDiv.appendChild(taskTextNode);

  // append taskNameDiv and taskDeltBtn to the task div
  taskDiv.appendChild(taskNameDiv);
  taskDiv.appendChild(taskDelBtn);

  // add the task div to the task list div
  taskList.insertBefore(taskDiv, taskList.childNodes[0]);
}
/*
btnAdd.addEventListener("click", e => {
  console.log("[Add this task:]");
  console.log(taskText);

  // create the task div
  let taskDiv = document.createElement("div");
  // add the "task" class name to the task div
  taskDiv.classList.add("task");

  // create the task-name div, add the class name
  let taskNameDiv = document.createElement("div");
  taskNameDiv.classList.add("task-name");

  // create task div content, which the name the inputted task
  let taskTextNode = document.createTextNode(taskText);

  // create the del-btn button, add the content and its class
  let taskDelBtn = document.createElement("button");
  taskDelBtn.innerHTML = "X";
  taskDelBtn.classList.add("del-btn");

  // remove task
  taskDelBtn.addEventListener("click", e => {
    taskDelBtn.parentElement.remove();
  });

  // append the taskTextNode to the taskName Div
  taskNameDiv.appendChild(taskTextNode);

  // append taskNameDiv and taskDeltBtn to the task div
  taskDiv.appendChild(taskNameDiv);
  taskDiv.appendChild(taskDelBtn);

  // add the task div to the task list div
  taskList.insertBefore(taskDiv, taskList.childNodes[0]);
});*/