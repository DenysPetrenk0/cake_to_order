export const initModalWhatIOffer = ({image, title, text, secondText, price, tikTokLink}) => {
	const backdrop = document.querySelector(".backdrop");
	backdrop.innerHTML = `
	<a href="#" class="modal__close">
		<svg class="modal__icon">
			<use href="./assets/icon/sprite.svg#cross"></use>
		</svg>
	</a>
	<div class="modal modal__what_i_offer">
		<div class="content">
			<div class="description">
				<h2 class="description__title">${title}</h2>
				<p class="description__price__text">${text}</p>
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
	backdrop.classList.remove("is-hidden");

	backdrop.querySelector(".modal__close").addEventListener("click", (event) => {
		event.preventDefault();
		backdrop.classList.add("is-hidden");
		backdrop.innerHTML = "";
	});
};