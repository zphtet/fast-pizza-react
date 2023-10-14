import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import Button from "../components/Button";
import { clearCart } from "../store/reducers/cartSlice";
const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isEmptyCart = cart.length === 0;
  const clearCartHandler = () => dispatch(clearCart());
  return (
    <div className="px-5 max-w-3xl mx-auto">
      <Link to={"/menu"} className="text-sm text-blue-500">
        &larr; Back to Menu
      </Link>

      {isEmptyCart ? (
        <p className="mt-5"> Your Cart is Empty !</p>
      ) : (
        <>
          <p className="py-3 text-2xl font-bold">Yout Cart , ZPH</p>
          <div>
            {cart.map((item) => {
              return <CartItem key={item.pizzaId} data={item} />;
            })}
          </div>
          <div className=" mt-5 flex gap-5">
            <Button text="Order Pizzas" click={() => navigate("/order/new")} />
            <Button
              text="Clear Cart"
              click={clearCartHandler}
              css="bg-slate-100 hover:bg-slate-300 border-2"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
