import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CryptoImage from "/src/assets/crypto.png";

const Login = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message, { position: "top-center", theme: "dark" });
    }
  }, [isError, message, user, navigate]);

  if (isLoading) {
    return <h2 className="text-center text-blue-500 font-bold">Loading...</h2>;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center flex-grow p-6 ${
        theme ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden"
      >
        {/* Image Section */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src={CryptoImage}
            alt="Crypto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div
          className={`w-full md:w-1/2 p-10 flex flex-col justify-center ${
            theme ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <h2 className="text-3xl font-extrabold text-center mb-6 uppercase tracking-wider">
            Crypto Login
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Your Email.."
              required
              className="w-full px-5 py-3 mb-4 border rounded-md bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password.."
              required
              className="w-full px-5 py-3 mb-4 border rounded-md bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition text-lg"
            >
              Login
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
