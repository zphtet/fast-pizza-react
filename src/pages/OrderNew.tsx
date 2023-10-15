import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import Button from "../components/Button";
import {
  Form,
  useActionData,
  redirect,
  useNavigation,
  Link,
} from "react-router-dom";
import type { ActionFunction } from "react-router-dom";
import { createOrder, getAddress } from "../utils/helper";
import { cartItemType } from "../types/type";
import { clearCart } from "../store/reducers/cartSlice";
import { isValidPhone } from "../utils/helper";
const OrderNew = () => {
  const [location, setLocation] = useState("");
  const cart = useSelector((state: RootState) => state.cart.cart);
  const user = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();
  const actionData = useActionData() as { phone?: string };
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const totalPrice = cart.reduce((accum, item) => {
    return accum + item.unitPrice! * item.quantity!;
  }, 0);

  const positionHandler = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const data = await getAddress({
        latitude: lat,
        longitude: long,
      });
      setLocation(`${data.locality}, ${data.city}`);
    });
  };

  useEffect(() => {
    return () => {
      dispatch(clearCart());
    };
  }, []);

  if (cart.length === 0)
    return (
      <div>
        <Link to={"/menu"}> &larr; Back to Menu</Link>
        <p>Your Cart is Empty</p>
      </div>
    );
  return (
    <div className="px-5 max-w-3xl mx-auto">
      <p className="text-xl py-5 font-bold sm:text-2xl">
        Ready to order ? Let's go !
      </p>

      <Form method="POST" className=" py-2 space-y-2 ">
        <div className="flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            readOnly={user ? true : false}
            placeholder={user ? user : "Your Name"}
            className="input py-2 h-auto w-full rounded-3xl text-sm focus:outline-yellow-400"
            name="customer"
            defaultValue={user}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="tel"
            placeholder="Type here"
            className="input py-2 h-auto w-full rounded-3xl text-sm focus:outline-yellow-400"
            name="phone"
            required
          />
          {actionData?.phone && (
            <span className="text-red-700 text-sm">
              Invalid phone number , We might need to contact you
            </span>
          )}
        </div>

        <div className="">
          <label className="label">
            <span className="label-text">Enter Your Location</span>
          </label>
          <div className="flex items-center hover:outline-2 hover:outline-yellow-400 rounded-3xl pr-1  overflow-hidden  bg-white focus-within:ring-2 focus-within:ring-yellow-400 py-1">
            <input
              type="text"
              placeholder="Type here"
              className="flex-1 text-sm hover:outline-none px-5 focus:outline-none py-1 "
              name="address"
              defaultValue={location}
              required
            />
            <span
              onClick={positionHandler}
              className=" cursor-pointer text-center block rounded-3xl py-1 h-auto px-2 bg-yellow-400 hover:bg-yellow-200 w-[150px] hover:scale-95 transition-all duration-150"
            >
              Get Position
            </span>
          </div>
        </div>
        <div className="checkbox-group flex gap-4 items-center pt-3">
          <input
            type="checkbox"
            id="priority"
            name="priority"
            className="w-6 h-6 accent-yellow-400 border-2 border-yellow-500 focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2"
          />
          <label htmlFor="priority">Want to give your order priority ? </label>
        </div>
        <input
          type="hidden"
          name="cart"
          readOnly
          value={JSON.stringify(cart)}
        />
        <div className="btn-container pt-5 flex justify-end">
          <Button disabled={isSubmitting} text={`Order Now $${totalPrice}`} />
        </div>
      </Form>
    </div>
  );
};

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const obj = Object.fromEntries(data);

  const orderObj = {
    customer: obj.customer as string,
    phone: obj.phone as string,
    address: obj.address as string,
    cart: JSON.parse(obj.cart as string) as cartItemType[],
    priority: obj.priority ? true : false,
    position: "",
  };

  const errors: { phone?: string } = {};

  if (!isValidPhone(orderObj.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (Object.keys(errors).length > 0) return errors;
  // if()
  try {
    const res = await createOrder(orderObj);

    return redirect(`/order/${res.id}`);
  } catch (err: any) {
    return { status: "fail", message: err?.message as string };
  }
};

export default OrderNew;
