import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords do not match", {
        position: "top-center",
        theme: "dark",
      });
    } else {
      dispatch(registerUser(formData));
    }
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
      className={`p-6 rounded-lg shadow-lg max-w-sm my-25 mx-auto ${
        theme ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          name="name"
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 mb-3 border rounded-md focus:ring-2 outline-none ${
            theme
              ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          name="email"
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 mb-3 border rounded-md focus:ring-2 outline-none ${
            theme
              ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 mb-3 border rounded-md focus:ring-2 outline-none ${
            theme
              ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          value={password2}
          name="password2"
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 mb-3 border rounded-md focus:ring-2 outline-none ${
            theme
              ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />

        {/* Register Button */}
        <button
          type="submit"
          className={`w-full font-semibold py-2 rounded-md transition ${
            theme
              ? "bg-green-700 hover:bg-green-800 text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
