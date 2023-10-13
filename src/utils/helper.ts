import { MenuType } from "../types/type";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu(): Promise<MenuType[]> {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

export function getMinutes() {
  return 5 + Math.floor(Math.random() * 10);
}
