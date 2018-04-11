//document.getElementById("nameWelcome").innerHTML = "Welcome, " + localStorage["name"] + "!";
//document.getElementById("myBar").style.width = "parseInt(100*parseInt(localStorage['progress']) / parseInt(localStorage['goal']))" + "%"; 
//document.getElementById("badgeDes").innerHTML = localStorage["badge1"] ;

var x = document.getElementById("badge_proof");
if (localStorage["proofreadingBadge"] === true) {
    x.style.display = "block";
    console.log("TRUE");
} else {
    x.style.display = "none";
    console.log("FALSE");
}
