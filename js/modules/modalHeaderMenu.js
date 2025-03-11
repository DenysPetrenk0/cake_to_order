export const initModalHeaderMenu = () => {
	const backdrop = document.querySelector(".backdrop");
	backdrop.innerHTML = `
		<a href="#" class="modal__close">
			<svg class="modal__icon">
				<use href="./assets/icon/cross.svg#cross"></use>
			</svg>
		</a>
		<ul class="modal__nav">
                <li class="modal__item">
                    <a href="#WhatIOffer" class="modal__link">
                        пропонуємо
                    </a>
                </li>
                <li class="modal__item">
                    <a href="#AboutMe" class="modal__link">
                        автор
                    </a>
                </li>
                <li class="modal__item">
                    <a href="#Gallery" class="modal__link">
                        роботи
                    </a>
                </li>
                <li class="modal__item">
                    <a href="#Testimonials" class="modal__link">
                        відгуки
                    </a>
                </li>
                <li class="modal__item">
                    <a href="#OrderProcess" class="modal__link">
                        замовити
                    </a>
                </li>
                <li class="modal__item">
                    <a href="#Contact" class="modal__link">
                        контакти
                    </a>
                </li>
            </ul>
	`;

	const closeMenu = () => {
		backdrop.classList.add("is-hidden");
		document.querySelector("#menuBtn").style.display = "block";
		backdrop.classList.remove("modal__menu");
		backdrop.innerHTML = "";
	};

	document.querySelector("#menuBtn").style.display = "none";
	backdrop.classList.remove("is-hidden");
	backdrop.classList.add("modal__menu");

	backdrop.querySelector(".modal__close").addEventListener("click", (event) => {
		event.preventDefault();
		closeMenu();
	});

	backdrop.querySelectorAll(".modal__link").forEach(link => {
		link.addEventListener("click", (event) => {
			closeMenu();
		});
	});
};