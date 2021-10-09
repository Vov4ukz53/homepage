{
	const welcome = () => {
		console.log("Witam serdecznie wszystkich developerow")
	}

	const toggleBackground = () => {
		const sectionBody = document.querySelector(".js-section-2");
		const nextColorName = document.querySelector(".js-nextColorName");
		
		sectionBody.classList.toggle("myColor");
		nextColorName.innerText = sectionBody.classList.contains("myColor") ? "Różowy" : "Mój kolor";
	};

	const init = () => {
		const colorButton = document.querySelector(".js-section2-button");	
		colorButton.addEventListener("click", toggleBackground);	

		welcome();
	}

	init();
}



