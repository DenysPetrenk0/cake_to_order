export const initModalGallery = () => {
	const backDrop = document.querySelector(".backdrop");

	let images = [];
	let currentIndex = 0;
	let touchStartX = 0;
	let touchEndX = 0;

	function openModal(imgArray, index) {
		images = imgArray;
		currentIndex = index;

		backDrop.innerHTML = `
			<a href="#" class="modal__close">
				<svg class="modal__icon">
					<use href="./assets/icon/cross.svg#cross"></use>
				</svg>
			</a>
			<div class="modal modal__gallery">
			<div class="modal__gallery__img__box">
				<img class="modal__image gallery__img" src="${images[currentIndex]}" alt="Gallery Image">			
			</div>
				<a href="#" class="modal__prev">
					<svg class="modal__icon">
						<use href="./assets/icon/modalArrow.svg#modal-arrow"></use>
					</svg>
				</a>
				<a href="#" class="modal__next">
					<svg class="modal__icon">
						<use href="./assets/icon/modalArrow.svg#modal-arrow"></use>
					</svg>
				</a>
			</div>
		`;

		backDrop.classList.remove("is-hidden");

		const modalImage = backDrop.querySelector(".modal__image");
		const closeButton = backDrop.querySelector(".modal__close");
		const prevButton = backDrop.querySelector(".modal__prev");
		const nextButton = backDrop.querySelector(".modal__next");
		const galleryImgBox = document.querySelector(".modal__gallery__img__box");

		function closeModal(event) {
			event.preventDefault();
			backDrop.classList.add("is-hidden");
			backDrop.innerHTML = "";
		}

		function showNextImage(event) {
			event.preventDefault();
			currentIndex = (currentIndex + 1) % images.length;
			modalImage.src = images[currentIndex];
		}

		function showPrevImage(event) {
			event.preventDefault();
			currentIndex = (currentIndex - 1 + images.length) % images.length;
			modalImage.src = images[currentIndex];
		}

		function handleTouchStart(event) {
			touchStartX = event.touches[0].clientX;
		}

		function handleTouchEnd(event) {
			touchEndX = event.changedTouches[0].clientX;
			handleSwipe(event);
		}

		function handleSwipe(event) {
			const swipeThreshold = 50;
			if (touchStartX - touchEndX > swipeThreshold) {
				showNextImage(event);
			} else if (touchEndX - touchStartX > swipeThreshold) {
				showPrevImage(event);
			}
		}

		closeButton.addEventListener("click", closeModal);
		prevButton.addEventListener("click", showPrevImage);
		nextButton.addEventListener("click", showNextImage);
		modalImage.addEventListener("click", showNextImage);
		modalImage.addEventListener("touchstart", handleTouchStart);
		modalImage.addEventListener("touchend", handleTouchEnd);

		backDrop.addEventListener("click", (e) => {
			if (e.target === backDrop) {
				closeModal();
			}
		});
	}

	return openModal;
}