import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className="text-3xl font-bold p-2 m-2 inline-flex"> Cart Items </h1>
      <button
        className="m-4 p-2 shadow-md bg-purple-200 rounded-md "
        onClick={() => handleClearCart()}
      >
        {" "}
        Clear Cart{" "}
      </button>
      <div>
        <ul className="flex flex-wrap">
          {" "}
          {cartItems.map((item) => (
            <li key={item.id}>
              {" "}
              <FoodItemCard {...item} />{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
