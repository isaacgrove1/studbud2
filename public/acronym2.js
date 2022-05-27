// updates screen with saved acronyms  
updateScreen();
// event listener for enter key and runs function e when enter is pressed
var text = document.getElementById("input-acronym"); //checks there is input
    text.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            validate(e)
        }
    });

function validate(e) {
    var text = document.getElementById("input-acronym").value;
    var new_acro_term = [] //establish empty array to accumulate letters
    var new_term = text.split(' '); //split at " "
    var new_term_length = new_term.length; 
    for (i=0; i<new_term_length; i++){ //for loop pushes all the first letters of each word into the array above
        new_acro_term.push(new_term[i][0])
    }
    var joined_new_acro = new_acro_term.join('').toUpperCase(); //joins all the letters in new variable and makes uppercase

    // creates an object with the short and long version of the acronym
    var myObj = {
        'name': text,
        'short': joined_new_acro
    }

    // if local storage is empty for the key create an array
    if(localStorage.getItem('acro_list') == null){
        localStorage.setItem('acro_list', '[]');
    }

    // push new object into acro list
    var old_data = JSON.parse(localStorage.getItem('acro_list'))
    old_data.push(myObj)

    localStorage.setItem('acro_list', JSON.stringify(old_data))
    updateScreen();
  }

function updateScreen(){
    if(localStorage.getItem('acro_list') != null){
        acro_list = JSON.parse(localStorage.getItem('acro_list'))

        // reseting list before printing !important!
        document.getElementById("acronym-list").innerHTML = ""
        
        for (let i = 0; i < acro_list.length; i++) {
            let long = acro_list[i].name;
            let short = acro_list[i].short;

            var li = "<li>" + long + "</li>";
            var li2 = "<li>" + short + "</li>";
            document.getElementById("acronym-list").insertAdjacentHTML('beforeend', li2); //add to list
            document.getElementById("acronym-list").insertAdjacentHTML('beforeend', li); //add to list
            document.getElementById("input-acronym").value = ""; // clear the value from typing box

        }
    }
}