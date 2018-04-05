function save() {
	var x = document.getElementById("signup");
	labels = ["name", "password", "email", "sheltercode", "comments"];
	for (i = 1; i < x.length-1 ;i++) {
        localStorage[labels[i-1]] = x.elements[i].value;
    }
}