import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getSearchedCoins } from "../features/coin/coinSlice";


const Form = () => {
  const { theme } = useSelector((state) => state.theme);
  const [text, setText] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchedCoins(text));
    navigate("/search/" + text);
    setText("");
  };

  return (
    <form className="w-full   " onSubmit={handleSubmit}>
      {/* Search Input */}
      <input
        className={`border rounded-lg p-3 my-4 w-full text-lg placeholder-gray-500 focus:outline-none focus:ring-2 transition ${
          theme
            ? "bg-gray-800 text-white border-gray-600 focus:ring-blue-400"
            : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
        }`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Search coin..."
      />

      {/* Search Button */}
      <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-3 transition">
        Search
      </button>
    </form>
  );
};

export default Form;
