var text = document.getElementById("input-acronym"); //checks there is input
    text.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            validate(e);
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

    // let obj_term = {
    //     'text_id': text,
    //     'new_term_id': joined_new_acro
    // };

    let definitions

    if (localStorage.getItem('definitions') == null) {
        definitions = [];
        defintiions.push(text)
      }
    else{
        defintiions.push(text)
    }

    localStorage.setItem("text", JSON.stringify([definitions]));
    localStorage.setItem("code", JSON.stringify(joined_new_acro));

    localStorage.setItem("bar", JSON.stringify([1,2,3]));
    var foo = localStorage.getItem("bar");
    JSON.parse(foo);
    // returns [1,2,3]

    var li = "<li>" + text + "</li>";
    var li2 = "<li>" + joined_new_acro + "</li>";
    document.getElementById("acronym-list").insertAdjacentHTML('beforeend', li2); //add to list
    document.getElementById("acronym-list").insertAdjacentHTML('beforeend', li); //add to list
    document.getElementById("input-acronym").value = ""; // clear the value from typing box
  }