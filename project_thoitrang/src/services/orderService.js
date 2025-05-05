const API_URL = "https://api.example.com/orders";

export const fetchOrders = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchOrderById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch order");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) {
      throw new Error("Failed to create order");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};