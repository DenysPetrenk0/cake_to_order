export function initModal() {
	const backDrop = document.querySelector(".backdrop");
	const modalImage = backDrop.querySelector(".modal__image");
	const closeButton = backDrop.querySelector(".modal__close");
	const prevButton = backDrop.querySelector(".modal__prev");
	const nextButton = backDrop.querySelector(".modal__next");

	let images = [];
	let currentIndex = 0;

	function openModal(imgArray, index) {
		images = imgArray;
		currentIndex = index;
		updateImage();
		backDrop.classList.remove("is-hidden");
	}

	function updateImage() {
		modalImage.src = images[currentIndex];
	}

	function closeModal() {
		backDrop.classList.add("is-hidden");
	}

	function showNextImage() {
		currentIndex = (currentIndex + 1) % images.length;
		updateImage();
	}

	function showPrevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		updateImage();
	}

	closeButton.addEventListener("click", closeModal);
	prevButton.addEventListener("click", showPrevImage);
	nextButton.addEventListener("click", showNextImage);
	backDrop.addEventListener("click", (e) => {
		if (e.target.classList.contains("modal__content")) {
			closeModal();
		}
	});

	return openModal;
}