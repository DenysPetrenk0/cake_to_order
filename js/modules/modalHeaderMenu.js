export const initModalHeaderMenu = () => {
	const backDrop = document.querySelector(".backdrop");
	const menuBtn = document.querySelector("#menuBtn");

	backDrop.innerHTML = `
		<a href="#" class="modal__close">
			<svg class="modal__icon">
				<use href="./assets/icon/sprite.svg#cross"></use>
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

	const closeBtn = backDrop.querySelector(".modal__close");

	const closeMenu = () => {
		closeBtn.classList.add("flip-hide");
		closeBtn.addEventListener("animationend", () => {
			backDrop.classList.add("is-hidden");
			menuBtn.classList.add("flip-show");
			backDrop.innerHTML = "";
		}, { once: true });
		menuBtn.addEventListener("animationend", () => {
			backDrop.classList.add("is-hidden");
			backDrop.classList.remove("modal__menu");
			backDrop.innerHTML = "";
			menuBtn.classList.remove("flip-show");
			if (window.innerWidth <= 550) {
				menuBtn.style.opacity = "1";
			}
		}, { once: true });
	};

	backDrop.classList.remove("is-hidden");
	backDrop.classList.add("modal__menu");
	closeBtn.classList.add("flip-show");
	closeBtn.addEventListener("animationend", () => {
		closeBtn.classList.remove("flip-show");
	}, { once: true });

	backDrop.querySelector(".modal__close").addEventListener("click", (event) => {
		event.preventDefault();
		closeMenu();
	});

	backDrop.querySelectorAll(".modal__link").forEach(link => {
		link.addEventListener("click", () => {
			closeMenu();
		});
	});
};