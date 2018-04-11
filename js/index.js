document.getElementById("nameWelcome").innerHTML = "Welcome, " + localStorage["name"] + "!";
document.getElementById("myBar").style.width = "parseInt(100*parseInt(localStorage['progress']) / parseInt(localStorage['goal']))" + "%"; 
document.getElementById("badgeDes").innerHTML = localStorage["badge1"] ;
