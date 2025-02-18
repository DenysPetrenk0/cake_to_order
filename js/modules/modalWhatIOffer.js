export const initModalWhatIOffer = ({image, title, text, secondText, price}) => {
	const backdrop = document.querySelector(".backdrop");
	backdrop.innerHTML = `
	<div class="modal">
		<button class="modal__close">&times;</button>
		<div class="content">
			<img src="${image}" alt="${title}">
			<div class="description">
				<h2 class="title">${title}</h2>
				<p class="prime__text">${text}</p>
				<p class="second__text">${secondText}</p>
				<p class="price">${price}</p>
			</div>
		</div>
	</div>
	`;
	backdrop.classList.remove("is-hidden");

	backdrop.querySelector(".modal__close").addEventListener("click", () => {
		backdrop.classList.add("is-hidden");
		backdrop.innerHTML = "";
	});
};