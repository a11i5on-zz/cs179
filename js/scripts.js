function save() {
	var x = document.getElementById("signup");
	labels = ["name", "password", "email", "sheltercode", "comments"];
	for (i = 1; i < x.length-1 ;i++) {
        localStorage[labels[i-1]] = x.elements[i].value;
    }

    localStorage["proofreadingBadge"] = false;
}

	// Gathered money goals in the quiz
function careerSave() {

	var goals = document.getElementById("goal");
	localStorage.setItem("progress", '0');
	localStorage.setItem("goal", goals.value);
}

// After completing a job in Work, progress updates dynamically based on the type of job
function paperReviewWork() {
  	localStorage["progress"] = parseInt(localStorage["progress"]) + 8;

}
function eslWork() {
	var esl = "10";
  	localStorage.setItem("progress", esl);

}

//Save progress of tests taken to certify badges
function Proofread() {
	var badgeDescription = "Mastered: English Proofreading";
  	localStorage.setItem("badge1", badgeDescription);

}
