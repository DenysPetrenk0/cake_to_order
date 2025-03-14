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

export const setOrder = () => {
	document.getElementById("orderForm").addEventListener("submit", async function(event) {
		event.preventDefault();

		const name = this.querySelector("[name='name']").value.trim();
		const lastName = this.querySelector("[name='last_name']").value.trim();
		const contact = this.querySelector("[name='contact']").value.trim();
		const communication = this.querySelector("[name='communication']").value.trim();

		if (!name || !lastName || !contact || !communication) {
			showResModal("Будь ласка, заповніть всі обов'язкові поля!");
			return;
		}

		const botToken = "token";
		const chatId = "id";
		const formData = new FormData(this);

		const text = `
		🔔 *Нове замовлення!*  
		👤 *Ім'я:* ${formData.get('name')} ${formData.get('last_name')}  
		📞 *Контакт:* ${formData.get('contact')}  
		📡 *Зв'язок:* ${formData.get('communication')}  
		📋 *Деталі:* ${formData.get('description') || 'Немає'}
		`;

		const url = `https://api.telegram.org/bot${botToken}/sendMessage`;


		try	{
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" })
			});

			if (response.ok) {
				showResModal("Замовлення відправлено успішно!");
				this.reset();
			} else {
				showResModal("Помилка при відправленні. Спробуйте ще раз.");
			}

		} catch (error) {
			showResModal("Помилка при відправленні. Спробуйте перевірити вірність заповнення усіх полів")
		}
	});
};
