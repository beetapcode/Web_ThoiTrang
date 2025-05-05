const API_URL = "https://api.example.com/contact";

export const sendContactMessage = async (messageData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });
    if (!response.ok) {
      throw new Error("Failed to send contact message");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};