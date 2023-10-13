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
  menuId: number | null;
  price: number | null;
  quantity: number | null;
  orderId?: string | null;
  estimateWatitTime?: number | null;
};
