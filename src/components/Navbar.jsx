import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa"; 
import { logoutUser } from "../features/auth/authSlice";



const Navbar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart); 
  const dispatch = useDispatch();



  return (
    <nav
      className={`flex justify-between items-center p-4 border-b ${
        theme
          ? "bg-black text-white border-gray-700"
          : "bg-white text-black border-gray-300"
      }`}
    >
    
      <h1 className="font-bold text-2xl sm:text-3xl">Coiniqo</h1>

    
      <div className="flex gap-2 flex-wrap justify-center">
        {!user ? (
          <>
            <Link
              to="/Login"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                theme
                  ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
              } text-white`}
            >
              Sign in
            </Link>
            <Link
              to="/Register"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                theme
                  ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"
              } text-white`}
            >
              Sign up
            </Link>
          </>
        ) : (
          <button
              onClick={() => dispatch(logoutUser())}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              theme
                ? "bg-red-600 hover:bg-red-700 focus:ring-red-800"
                : "bg-red-700 hover:bg-red-800 focus:ring-red-300"
            } text-white`}
          >
            Logout
          </button>
        )}

        <Link
          to="/Cart/Cartitem"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
            theme
              ? "bg-red-600 hover:bg-red-700 focus:ring-red-800"
              : "bg-red-700 hover:bg-red-800 focus:ring-red-300"
          } text-white`}
        >
          <FaShoppingCart className="h-5 w-5" />
          
          {cartItems.length > 0 && (
            <span
              className={` inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full`}
            >
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
