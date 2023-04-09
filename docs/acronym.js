// updates screen with all acronmym saved in local storage
updateScreen();

// event listener for enter key and runs function e when enter is pressed
var text = document.getElementById("input-acronym"); //checks there is input
    text.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            createAcro() // runs createAcro function
        }
    });

function createAcro() {

    // saves input value in variable
    var text = document.getElementById("input-acronym").value;
    var new_acro_term = [] //establish empty array to accumulate letters
    var new_term = text.split(' '); //split at " "
    var new_term_length = new_term.length; 
    for (i=0; i<new_term_length; i++){ //for loop pushes all the first letters of each word into the array above
        new_acro_term.push(new_term[i][0])
    }
    var joined_new_acro = new_acro_term.join('').toUpperCase(); //joins all the letters in new variable and makes uppercase

    // creates an object with the short and long version of the acronym
    var NewAcroObject = {
        'name': text,
        'short': joined_new_acro,
        'date-id': Date.now()
    }

    // if local storage is empty for the key create an array
    if(localStorage.getItem('acro_list') == null){
        localStorage.setItem('acro_list', '[]');
    }

    // push new object into acro list
    var old_data = JSON.parse(localStorage.getItem('acro_list'))
    old_data.push(NewAcroObject)

    // set item into acro-list
    localStorage.setItem('acro_list', JSON.stringify(old_data))

    // update screen
    updateScreen();
  }

function updateScreen(){
    // if there is something in the key associated with the acronyms in local storage then get those item
    if(localStorage.getItem('acro_list') != null){
        acro_list = JSON.parse(localStorage.getItem('acro_list'))

        // reseting list before printing all acronyms
        document.getElementById("acronym-list").innerHTML = ""
        // document.getElementById("delete-list").innerHTML = ""

        // for each object in the acronym list, assign a variable to the long version and shortened version
        for (let i = 0; i < acro_list.length; i++) {
            let long = acro_list[i].name;
            let short = acro_list[i].short;

            // create delete button for each item in list
            let delButton = document.createElement("button");
            let delButtonText = document.createTextNode("x");
            delButton.appendChild(delButtonText);

            // put into a list tag and display each item on the screen
            var li = "<li>" + long + "</li>";
            var li2 = "<li>" + short + "</li>";

            // document.getElementById("acronym-list").appendChild(delButton) // delete button added to list
            document.getElementById("acronym-list").insertAdjacentHTML('beforeend', li2); //short added to list
            document.getElementById("acronym-list").insertAdjacentHTML('beforeend', li); //long add to list 
            document.getElementById("input-acronym").value = ""; // clear the value from typing box
        }
    }
}

// Hide every second term - mapped to a button with the ID colour-change
// $('#colour-change').toggle(function () {
//     $("#acronym-list>li:nth-child(even)").css({color: "#48567B"});
// }, function () {
//     $("#acronym-list>li:nth-child(even)").css({color: "white"});
// });