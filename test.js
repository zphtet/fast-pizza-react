// let cart = [
//   { id: 1, name: "apple" },
//   { id: 2, name: "orange" },
// ];

// let isInCart = cart.find((item) => item.id === 3);
// console.log(isInCart);

import { formatDistance } from "date-fns";
import { format } from "date-fns";
// const duration = formatDistance(
//   new Date("2023-10-13T15:00:59.812Z"),
//   Date.now()
// );

// console.log(duration);

// console.log(
//   Date.now()
//     .toLocaleString("en-US", { timeStyle: "medium", dateStyle: "short" })
//     .replace(",", " at")
// );
const formatedDate = format(
  new Date("2023-10-13T15:00:59.812Z"),
  "MMM d h:mm:ss aaaaa'm'"
);
console.log(formatedDate);

fetch("https://ipapi.co/json/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data, "fetch country");
  });
