export function initSmoothScroll() {
	const sections = document.querySelectorAll(".section, footer");
	const navLinks = document.querySelectorAll(".menu__link");
	const backdrop = document.querySelector(".backdrop");
	let isScrolling = false;

	document.addEventListener("wheel", (event) => {
		if (backdrop.querySelector(".modal")) {
			event.preventDefault();
			document.body.style.overflow = "hidden";
			return;
		}
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
			if (entry.isIntersecting) {
				const id = entry.target.id;
				navLinks.forEach((link) => link.classList.remove("active"));
				const activeLink = document.querySelector(`.menu__link[href="#${id}"]`);

				if (activeLink) {
					activeLink.classList.add("active");
				}
				document.querySelector(".hero__hashtag__container").style.display = id === "Contact" ? "none" : "block";
			}
		});
		},
		{rootMargin: "-10% 0px -10% 0px", threshold: 0.5}
	);
	sections.forEach((section) => observer.observe(section));
}