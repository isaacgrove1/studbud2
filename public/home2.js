// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); // Complex CSS query
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const completionTimeInput = document.getElementById("completionTimeInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const priorityInput = document.getElementById("priorityInput");

window.onload = updateScreen()
// Event listener for Button click
// This could also be form.addEventListener("submit", function() {...} )
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

  // let task = form.elements.task.value; // could be swapped out for line below
  let task = taskInput.value;
  let due = dueDateInput.value
  let complete = completionTimeInput.value
  let estimated = estimatedTimeInput.value
  let priority = priorityInput.value

  // Call the addTask() function using
  addTask(task, due, priority, estimated, complete);
})
  
function addTask(taskDescription, dueDate, priorityRating, estimatedTime, completionStatus) {
  var task = {
    'description_key': taskDescription,
    'due_key': dueDate,
    'priority_key': priorityRating,
    'estimated_key': estimatedTime,
    'completion_key': completionStatus
  };

  if(localStorage.getItem('home_page_list') == null){
    localStorage.setItem('home_page_list', '[]');
  }

  var old_data = JSON.parse(localStorage.getItem('home_page_list'))
  old_data.push(task)

  localStorage.setItem('home_page_list', JSON.stringify(old_data))
  updateScreen()
}

function updateScreen(){
  if(localStorage.getItem('home_page_list') != null){
    home_page_list = JSON.parse(localStorage.getItem('home_page_list'))

    // reseting list before printing !important!
    document.getElementById("tasklist").innerHTML = ""
    
    for (let i = 0; i < home_page_list.length; i++) {
        let El1 = home_page_list[i].description_key;
        let El2 = home_page_list[i].due_key;
        let El3 = home_page_list[i].priority_key;
        let El4 = home_page_list[i].estimated_key;
        let El5 = home_page_list[i].completion_key;

        var item = "<li>" + "<u>" + "<b>" + El1 + "</b>" + "</u>" + "<br>" +
                    "Due on " + "<b>" + El2 + "</b>" + "<br>" + 
                    "Its a " + "<b>" + El3 + "</b>" + " priority" + "<br>" +
                    "Its estimated to take " + "<b>" + El4 + " hours" + "</b>" + "<br>"+
                    "Submit at " + "<b>" + El5 + "</b>" + "<br>" + "<br>" + "</li>";

        // NOT WORKING TRYING TO ADD DELETE BUTTON 
        // var span = document.createElement("SPAN");
        // var txt = document.createTextNode("\u00D7");
        // span.className = "close";
        // span.appendChild(txt);
        // a[i].appendChild(span);

        document.getElementById("tasklist").insertAdjacentHTML('beforeend', item); //add to list
        form.reset();
    }
  }
}
  // Setup delete button DOM elements
  
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  // a.appendChild(delButton); // Adds a delete button to every task
  // Listen for when the 

  delButton.addEventListener("click", function(event){
    item.remove(); // Remove the task item from the page when button clicked
  })