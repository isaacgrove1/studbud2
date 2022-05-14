// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const tasklist = document.getElementById("tasklist");
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const completionTimeInput = document.getElementById("completionTimeInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const priorityInput = document.getElementById("priorityInput");

// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

  // let task = form.elements.task.value; // could be swapped out for line below
  let task = taskInput.value;
  let date = (new Date()).toLocaleDateString('en-US') //Convert to short date format
  let due = dueDateInput.value
  let complete = completionTimeInput.value
  let estimated = estimatedTimeInput.value
  let priority = priorityInput.value

  // Call the addTask() function using
  addTask(task, date, due, complete, estimated, priority);

  // Log out the newly populated taskList everytime the button has been pressed
  console.log(taskList);
})

// Create an empty array to store our tasks
var taskList = [];

function addTask(taskDescription, createdDate, dueDate, priorityRating, estimatedTime, completionStatus) {
  let task = {
    taskDescription,
    createdDate,
    dueDate,
    priorityRating,
    estimatedTime,
    completionStatus
  };

  // Add the task to our array of tasks
  taskList.push(task);

  // Separate the DOM manipulation from the object creation logic
  renderTask(task);
}


// Function to display the item on the page
function renderTask(task) {
// local storage
localStorage.setItem("task", JSON.stringify(task));
let taskNew = localStorage.getItem("task");
taskNew = JSON.parse(taskNew);
let val1 = taskNew.taskDescription
let val2 = taskNew.dueDate
let val3 = taskNew.priorityRating
let val4 = taskNew.estimatedTime
let val5 = taskNew.completionStatus

  let item = document.createElement("li");
  item.innerHTML = "<p>" + "<u>" + "<b>" + val1 + "</b>" + "</u>" + "<br>" + "<br>" +
                  "<b>" + "Due on: " + "</b>" + val2 + "<br>" +
                  "<b>" + "At: " + "</b>" + val3 + "<br>" + 
                  "<b>" + "Estimated to take: " + "</b>" + val4 + " hours" + "<br>" + 
                  "<b>" + "Its a " + "</b>" + val5 + " priority" + "</p>";

  tasklist.appendChild(item);

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Listen for when the 
  delButton.addEventListener("click", function(event){
    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })
  
  // Clear the value of the input once the task has been added to the page
  form.reset();
}