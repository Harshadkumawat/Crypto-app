import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsMoon, BsSun } from "react-icons/bs";
import { switchTheme } from "../features/theme/themeSlice";



const ThemeButton = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const toggleTheme = () => {
    const newTheme = !theme; 
    dispatch(switchTheme());
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };
  

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-20 left-6 w-14 h-14 flex items-center justify-center rounded-full 
                shadow-lg transition-all duration-300
                bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
    >
      {theme ? <BsSun size={24} /> : <BsMoon size={24} />}
    </button>
  );
};

export default ThemeButton;
