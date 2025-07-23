const images = ["./assets/img/hero/bg.jpg", "./assets/img/hero/bg2.jpg", "./assets/img/hero/bg3.jpg", "./assets/img/hero/bg4.jpg"];
let index = 0;
const bgContainer = document.querySelector("#AboutIntro");

export function changeBackground() {
	if (window.innerWidth > 1024) return;

	const nextIndex = (index + 1) % images.length;
	const nextImage = images[nextIndex];

	bgContainer.style.setProperty("--prev-image", `url(${images[index]})`);
	bgContainer.style.background = `url(${nextImage}) no-repeat center center/cover`;

	bgContainer.classList.add("fade");

	setTimeout(() => {
		bgContainer.classList.remove("fade");
		index = nextIndex;
	}, 1000);
}

export function startBackgroundChange() {
	if (window.innerWidth <= 1200) {
		if (!bgContainer.dataset.interval) {
			bgContainer.dataset.interval = setInterval(changeBackground, 4000);
		}
	} else {
		clearInterval(bgContainer.dataset.interval);
		bgContainer.dataset.interval = null;
	}
}
