export const setupContactPlaceholder = () => {
	const selectCommunication = document.querySelector("#form_communication");
	const inputContact = document.querySelector("#input_contact");

	if (!selectCommunication || !inputContact) return;

	const placeholderText = {
		tel: 'Введіть номер телефону',
		instagram: 'Введіть Instagram нік',
		viber: 'Введіть номер у Viber',
		telegram: 'Введіть Telegram нік або номер',
		discord: 'Введіть Discord нік'
	};

	selectCommunication.addEventListener("change", function () {
		inputContact.placeholder = placeholderText[this.value] || 'Контактні дані';
		inputContact.type = this.value === "tel" || this.value === 'viber' ? 'tel' : 'text';
		inputContact.disabled = !this.value;
	});
};

const closeModal = (event) => {
	const backDrop = document.querySelector(".backdrop");
	event.preventDefault();
	backDrop.classList.add("is-hidden");
	backDrop.innerHTML = "";
}

const showResModal = (text) => {
	const backDrop = document.querySelector(".backdrop");

	backDrop.innerHTML = `
		<a href="#" class="modal__close">
			<svg class="modal__icon">
				<use href="./assets/icon/sprite.svg#cross"></use>
			</svg>
		</a>
		<div class="modal__alert__box">
			<p class="modal__alert__text">${text}</p>
			<button type="submit" id="modalCloseBtn">Добре</button>
		</div>
	`;
	backDrop.classList.remove("is-hidden");

	const closeBtn = backDrop.querySelector(".modal__close");
	const okBtn = backDrop.querySelector("#modalCloseBtn");

	closeBtn.addEventListener("click", closeModal);
	okBtn.addEventListener("click", closeModal);
}

	const isValidPhoneNumber = (number) => {
		const phoneRegex = /^(?:\d{10}|380\d{9})$/;
		return phoneRegex.test(number);
	};

export const setOrder = () => {
	document.getElementById("orderForm").addEventListener("submit", async function(event) {
		event.preventDefault();

		const name = this.querySelector("[name='name']").value.trim();
		const contact = this.querySelector("[name='contact']").value.trim();
		const communication = this.querySelector("[name='communication']").value.trim();

		if (!name || !contact || !communication) {
			showResModal("Будь ласка, заповніть всі обов'язкові поля!");
			return;
		}

		if (communication === 'tel' && !isValidPhoneNumber(contact)) {
			showResModal("Невірно вказаний номер телефону. Перевірте номер і спробуйте ще раз!");
			return;
		}

		const formData = new FormData(this);
		const orderData = {
			name: formData.get('name'),
			last_name: formData.get('last_name'),
			contact: formData.get('contact'),
			communication: formData.get('communication'),
			description: formData.get('description') || 'Немає'
		};

		try {
			const response = await fetch("/.netlify/functions/sendOrder", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(orderData)
			});

			const result = await response.json();

			if (response.ok) {
				showResModal("Замовлення відправлено успішно!");
				this.reset();
			} else {
				showResModal(result.error || "Помилка при відправленні.");
			}
		} catch (error) {
			showResModal("Помилка при відправленні. Спробуйте ще раз.");
		}
	});
};