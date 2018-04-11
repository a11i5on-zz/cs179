document.getElementById("nameWelcome").innerHTML = "Welcome, " + localStorage["name"] + "!";
var percent = parseInt(100*parseInt(localStorage['progress']) / parseInt(localStorage['goal']));
document.getElementById("myBar").style.width = percent + "%"; 
document.getElementById("myBar").innerHTML = percent + "%"; 
document.getElementById("statement").innerHTML = "You have earned $" + localStorage['progress'] + " this month so far. Great job!";