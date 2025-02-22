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

export const setOrder = () => {
	document.getElementById("orderForm").addEventListener("submit", async function(event) {
		event.preventDefault();

		const botToken = "token";
		const chatId = "id";

		console.log(this)
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
				alert('Замовлення відправлено!');
				this.reset();
			} else {
				alert("'Помилка при відправленні. Спробуйте ще раз.'");
			}

		} catch (error) {
			alert("помилка");
		}
	});
};
