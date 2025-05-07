import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../features/cart/cartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { cartItems } = useSelector((state) => state.cart);

  const totalAmount = cartItems.reduce((acc, item) => {
    const price = item.market_data?.current_price?.inr || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full md:min-w-4xl bg-gray-800 p-6 rounded-xl shadow-2xl backdrop-blur-lg border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
          🛒 Your Cart
        </h2>

        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty 😢</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-700 p-5 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item?.image?.large || "image not available"}
                    alt={item?.name}
                    className="w-14 h-14 drop-shadow-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300">
                      {item?.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      💰 Price: ₹{item?.market_data?.current_price?.inr}
                    </p>
                    <p className="text-sm text-gray-400">
                      📦 Qty:{" "}
                      <button onClick={() => dispatch(increment(item.id))}>
                        {" "}
                        +{" "}
                      </button>{" "}
                      <span className="text-white font-medium">
                        {item.quantity}
                      </span>{" "}
                      <button onClick={() => dispatch(decrement(item.id))}>
                        -{" "}
                      </button>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(remove(item.id))}
                  className="bg-red-500 px-5 py-2 text-sm font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
                >
                  ❌ Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-8 bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-200">
              🧾 Your Bill
            </h3>
            <p className="text-lg text-gray-300 mt-2">
              🛍 Items:{" "}
              <span className="font-bold text-white">{cartItems.length}</span>
            </p>
            <p className="text-lg text-gray-300">
              💵 Total:{" "}
              <span className="font-bold text-green-400">₹{totalAmount}</span>
            </p>
            <button className="w-full mt-4 bg-green-500 py-3 rounded-lg text-lg font-semibold text-white shadow-md hover:bg-green-600 transition-all">
              ✅ Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
