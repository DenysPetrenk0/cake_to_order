import "dotenv/config";

export async function handler(event) {
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: JSON.stringify({ error: "Method Not Allowed" })
		};
	}

	try {
		const { name, last_name, contact, communication, description } = JSON.parse(event.body);

		const botToken = process.env.BOT_TOKEN;
		const chatId = process.env.CHAT_ID;

		if (!botToken || !chatId) {
			return {
				statusCode: 500,
				body: JSON.stringify({ error: "Missing BOT_TOKEN or CHAT_ID in environment variables" })
			};
		}

		const text = `
		🔔 *Нове замовлення!*  
		👤 *Ім'я:* ${name} ${last_name}  
		📞 *Контакт:* ${contact}  
		📡 *Зв'язок:* ${communication}  
		📋 *Деталі:* ${description}
		`;

		const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" })
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error("Telegram API Error:", errorText);
			return {
				statusCode: 500,
				body: JSON.stringify({ error: "Failed to send message", details: errorText })
			};
		}

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true })
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message })
		};
	}
}