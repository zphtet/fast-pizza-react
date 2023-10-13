import { MenuType, newOrderType } from "../types/type";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu(): Promise<MenuType[]> {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder: newOrderType) {
  console.log(newOrder, "New ORDER");
  const order = {
    customer: "hell",
    address: "yangonmaynamr",
    cart: [
      {
        name: "Magrita",
        pizzaId: 1,
        unitPrice: 12,
        totalPrice: 120,
        quantity: 10,
      },
    ],
    phone: "12423432",
    position: "",
    priority: true,
  };
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) return { status: "fail", err: res };
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export function getMinutes() {
  return 5 + Math.floor(Math.random() * 10);
}
