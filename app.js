let slidePosition = 0;
const slides = document.getElementsByClassName("carousel_item");

const totalSlides = slides.length;
// console.log(totalSlides)

document
	.getElementById("carousel_button--next")
	.addEventListener("click", function () {
		// console.log("Next");
		moveToNextSlide();
	});

document
	.getElementById("carousel_button--prev")
	.addEventListener("click", function () {
		// console.log("Next");
		moveToPrevSlide();
	});

function updateSlidePosition() {
	for (let slide of slides) {
		// console.log(slide);
		slide.classList.remove("carousel_item--visible");
		slide.classList.add("carousel_item--hidden");
	}

	slides[slidePosition].classList.add("carousel_item--visible");
}
setInterval(moveToNextSlide, 5000);

function moveToNextSlide() {
	// console.log(" hello next");
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}

	updateSlidePosition();
}

function moveToPrevSlide() {
	// console.log(" hello prev");
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}

	updateSlidePosition();
}
