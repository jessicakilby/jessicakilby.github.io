var topButton = document.getElementsByClassName("btn");

for (var i = 0; i < topButton.length; i++) {
	var backToTopButton = document.getElementsByClassName("btn");
	backToTopButton[i].addEventListener("click", backToTop);
}

function backToTop() {
	console.log("backToTop");
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
	console.log("backToTop");
}

