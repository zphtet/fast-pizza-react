export type MenuType = {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};

export type cartItemType = {
  name: string;
  pizzaId: number | null;
  unitPrice: number | null;
  quantity: number | null;
  totalPrice: number | null;
};

export type newOrderType = {
  address: string;
  phone: string;
  customer: string;
  cart: cartItemType[];
  priority: boolean;
};

export type returnOrderType = {
  customer: string;
  status: string;
  priority: boolean;
  cart: newOrderType[];
  id: string;
  estimatedDelivery: Date;
  orderPrice: number;
  priorityPrice: number;
};
