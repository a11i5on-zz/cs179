function work_eligible() {
    var x = document.getElementById("proofreading job");
    if (localStorage["proofreadingBadge"] === true) {
        x.href = "job.html";
    }
    console.log(localStorage["proofreadingBadge"]);
}

work_eligible();
