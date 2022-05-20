updateScreen();
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

    // YT TUT

    var myObj = {
        'name': text,
        'short': joined_new_acro
    }

    if(localStorage.getItem('data') == null){
        localStorage.setItem('data', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('data'))
    old_data.push(myObj)

    localStorage.setItem('data', JSON.stringify(old_data))
    updateScreen();
  }

function updateScreen(){
    if(localStorage.getItem('data') != null){
        data = JSON.parse(localStorage.getItem('data'))
        console.log(data)
        // reseting list before printing !important!
        document.getElementById("acronym-list").innerHTML = ""
        for (let i = 0; i < data.length; i++) {
            let long = data[i].name;
            let short = data[i].short;

            var li = "<li>" + long + "</li>";
            var li2 = "<li>" + short + "</li>";
            document.getElementById("acronym-list").insertAdjacentHTML('beforeend', li2); //add to list
            document.getElementById("acronym-list").insertAdjacentHTML('beforeend', li); //add to list
            document.getElementById("input-acronym").value = ""; // clear the value from typing box

        }
    }
}