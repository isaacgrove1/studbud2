// Setting up variables for HTML elements using DOM selection
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button"); 
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const completionTimeInput = document.getElementById("completionTimeInput");
const estimatedTimeInput = document.getElementById("estimatedTimeInput");
const priorityInput = document.getElementById("priorityInput");

// update task onto screen on the loading of the page
window.onload = updateScreen()

// run function once submit button is clicked
button.addEventListener("click", function(event) {
  event.preventDefault(); // Not as necessary for button, but needed for form submit

  // Get the value for all inputs inputted in a new task and store them in variables
  let task = taskInput.value;
  let due = dueDateInput.value
  let complete = completionTimeInput.value
  let estimated = estimatedTimeInput.value
  let priority = priorityInput.value

  // Call the addTask() function, adding all these values with a corresponding key
  addTask(task, due, priority, estimated, complete);
})
  
  // store new task in an object called task
function addTask(taskDescription, dueDate, priorityRating, estimatedTime, completionStatus) {
  var task = {
    'description_key': taskDescription,
    'due_key': dueDate,
    'priority_key': priorityRating,
    'estimated_key': estimatedTime,
    'completion_key': completionStatus
  };

  // create a list within local storage if there is not one already
  if(localStorage.getItem('home_page_list') == null){
    localStorage.setItem('home_page_list', '[]');
  }

  // push new task into local storage array
  var old_data = JSON.parse(localStorage.getItem('home_page_list'))
  old_data.push(task)

  // set item into local storage
  localStorage.setItem('home_page_list', JSON.stringify(old_data))

  // call function which updates screen with new task
  updateScreen()
}

function updateScreen(){
  // if there is something in the home_page_list key in local storage, then retreive everything associated with that key
  if(localStorage.getItem('home_page_list') != null){
    home_page_list = JSON.parse(localStorage.getItem('home_page_list'));

    // reseting list before printing out all tasks
    document.getElementById("tasklist").innerHTML = ""
    
    // for each item in the list, save each attribute in a new variable 
    for (let i = 0; i < home_page_list.length; i++) {
        let El1 = home_page_list[i].description_key;
        let El2 = home_page_list[i].due_key;
        let El3 = home_page_list[i].priority_key;
        let El4 = home_page_list[i].estimated_key;
        let El5 = home_page_list[i].completion_key;

        // create a new variable with all the aatributes of the object combined
        // use <b> and <u> tags, to highlight key info 
        item = "<u>" + "<b>" + El1 + "</b>" + "</u>" + "<br>" +
                    "Due on " + "<b>" + El2 + "</b>" + "<br>" + 
                    "Its a " + "<b>" + El3 + "</b>" + " priority" + "<br>" +
                    "Its estimated to take " + "<b>" + El4 + " hours" + "</b>" + "<br>"+
                    "Submit at " + "<b>" + El5 + "</b>" + "<br>" + "<br>";

        // NOT WORKING TRYING TO ADD DELETE BUTTON 
        // var span = document.createElement("SPAN");
        // var txt = document.createTextNode("\u00D7");
        // span.className = "close";
        // span.appendChild(txt);
        // a[i].appendChild(span);

        // NOT WORKING TRYING TO ADD ANOTHER DELETE BUTTON 
        // let delButton = document.createElement("button");
        // let delButtonText = document.createTextNode("Delete");
        // delButton.appendChild(delButtonText);
        // item.appendChild(delButton); // Adds a delete button to every task

        // Print new task on screen
        document.getElementById("tasklist").insertAdjacentHTML('beforeend', item);
        // reset input form
        form.reset();
    }
  }
}