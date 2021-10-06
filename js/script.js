
let sectionBody = document.querySelector(".js-section-2");
let colorButton = document.querySelector(".js-section2-button");

colorButton.addEventListener("click", () => {
	sectionBody.classList.toggle("myColor");
	colorButton.classList.toggle("active");

	colorButton.innerText = colorButton.classList.contains("active") ? "Różowy" : "Mój kolor";
});


