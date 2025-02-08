export function initSmoothScroll() {
	const sections = document.querySelectorAll(".section");
	let isScrolling = false;

	document.addEventListener("wheel", (event) => {
		if (isScrolling) return;

		event.preventDefault();

		let currentIndex = [...sections].findIndex(
			(section) => Math.abs(section.getBoundingClientRect().top) < window.innerHeight / 2
		);

		if (event.deltaY > 0 && currentIndex < sections.length - 1) {
			isScrolling = true;
			sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
		} else if (event.deltaY < 0 && currentIndex > 0) {
			isScrolling = true;
			sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
		}

		// Встановлюємо таймаут, щоб запобігти багатьом подіям одночасно
		setTimeout(() => {
			isScrolling = false;
		}, 800); // Час має відповідати швидкості анімації `scrollIntoView`
	}, { passive: false });
}