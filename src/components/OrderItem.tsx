import type { cartItemType } from "../types/type";

type OrderItemProps = {
  data: cartItemType;
  isLoading: boolean;
  ingredients: string[] | [];
};
const OrderItem = ({ data, isLoading, ingredients }: OrderItemProps) => {
  // console.log(ingredients, "ingredients");
  const { name, quantity, unitPrice } = data;
  return (
    <div className="py-3 ">
      <div className="flex items-center justify-between">
        <p>
          {quantity} x {name}
        </p>
        <p className="font-bold">$ {quantity! * unitPrice!}</p>
      </div>
      <p className="text-sm text-gray-400">
        {isLoading ? "Loading ..." : ingredients.join(",")}
      </p>
    </div>
  );
};

export default OrderItem;
