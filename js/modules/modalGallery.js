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
					<use href="./assets/icon/sprite.svg#cross"></use>
				</svg>
			</a>
			<div class="modal modal__gallery">
				<div class="modal__gallery__img__box">
					<img class="modal__image modal__gallery__img" src="${images[currentIndex]}" alt="Gallery Image">			
				</div>
			</div>
			<div class="modal__gallery__control">
				<button class="modal__prev"></button>
				<button class="modal__next"></button>
			</div>
		`;

		backDrop.classList.remove("is-hidden");

		const modalImage = backDrop.querySelector(".modal__image");
		const closeButton = backDrop.querySelector(".modal__close");
		const prevButton = backDrop.querySelector(".modal__prev");
		const nextButton = backDrop.querySelector(".modal__next");
		const menuBtn = document.querySelector("#menuBtn");

		closeButton.classList.add("flip-show");
		closeButton.addEventListener("animationend", () => {
			closeButton.classList.remove("flip-show");
		}, { once: true });

		function closeModal(event) {
			event.preventDefault();
			closeButton.classList.add("flip-hide");
			closeButton.addEventListener("animationend", () => {
				backDrop.classList.add("is-hidden");
				if (window.innerWidth <= 550) {
					menuBtn.classList.add("flip-show");
					menuBtn.addEventListener("animationend", () => {
						menuBtn.classList.remove("flip-show");
						menuBtn.style.opacity = "1";
					}, { once: true });
				}
				backDrop.innerHTML = "";
			}, { once: true });
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