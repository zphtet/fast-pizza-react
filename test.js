let cart = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
];

let isInCart = cart.find((item) => item.id === 3);
console.log(isInCart);
