import { MenuType } from "../types/type";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// const wait = (sec: number) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Waited for " + sec + " seconds");
//     }, sec * 1000);
//   });
// };

export async function getMenu(): Promise<MenuType[]> {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}
