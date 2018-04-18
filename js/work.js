function work_eligible() {
    var x = document.getElementById("ptitle");
    var y = document.getElementById("stitle");
    if (localStorage["proofreadingBadge"] == 'true') {
        x.href = "job.html";
        y.href = "survey.html";
    }
    else {
    	alert("You are not yet eligible for this job. Please test to certify for English proofreading first.");
    }
}

work_eligible();
