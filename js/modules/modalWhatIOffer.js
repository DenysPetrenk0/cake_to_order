export const initModalWhatIOffer = ({image, title, text, secondText, price, tikTokLink}) => {
	const backDrop = document.querySelector(".backdrop");
	const menuBtn = document.querySelector("#menuBtn");

	backDrop.innerHTML = `
		<a href="#" class="modal__close">
			<svg class="modal__icon">
				<use href="./assets/icon/sprite.svg#cross"></use>
			</svg>
		</a>
		<div class="modal modal__what_i_offer">
			<div class="content">
				<div class="description">
					<h2 class="description__title">${title}</h2>
					<p class="description__prime__text">${text}</p>
					<p class="description__second__text">${secondText}</p>
					<div class="description__price__box">
						<div class="description__price">
							<p class="description__price__text">ціна: </p>
							<p class="description__price__number">${price}</p>
							<p class="description__price__text">грн/кг</p>
						</div>
						<p class="description__price__text">без урахування декору</p>
					</div>
					<a
						href=${tikTokLink}
						class="social-links__link modal__what_i_offer__tiktok"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg class="social-links__icon">
							<use href="./assets/icon/sprite.svg#tiktok"></use>
						</svg>
					</a>
				</div>
				<div class="modal__image__box">
					<img class="modal__image" src="${image}" alt="${title}">			
				</div>
			</div>
		</div>
	`;
	backDrop.classList.remove("is-hidden");
	const closeBtn = backDrop.querySelector(".modal__close");

	closeBtn.classList.add("flip-show");
	closeBtn.addEventListener("animationend", () => {
		closeBtn.classList.remove("flip-show");
	}, { once: true });

	closeBtn.addEventListener("click", (event) => {
		event.preventDefault();
		closeBtn.classList.add("flip-hide");
		closeBtn.addEventListener("animationend", () => {
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
	});
};