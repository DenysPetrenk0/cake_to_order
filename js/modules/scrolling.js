export function initSmoothScroll() {
	const sections = document.querySelectorAll(".section");
	const navLinks = document.querySelectorAll(".menu__link");
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

		setTimeout(() => {
			isScrolling = false;
		}, 800);
	}, { passive: false });

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			console.log(entry.isIntersecting)
			if (entry.isIntersecting) {
				navLinks.forEach((link) => link.classList.remove("active"));
				const activeLink = document.querySelector(`.menu__link[href="#${entry.target.id}"]`);

				if (activeLink) {
					activeLink.classList.add("active");
				}
			}
		});
		},
		{rootMargin: "-10% 0px -10% 0px", threshold: 0.5}
	);
	sections.forEach((section) => observer.observe(section));
}