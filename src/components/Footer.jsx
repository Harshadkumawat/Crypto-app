import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <footer
      className={`${
        theme ? "bg-black text-gray-400 border-t border-gray-700" : "bg-white text-gray-700 border-t border-gray-300"
      } py-10 mt-auto    `}
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center h-31 justify-center">
        <h1
          className={`${
            theme ? "text-white" : "text-black"
          } font-bold text-2xl mb-6`}
        >
          CryptoDCX
        </h1>

        <ul className="flex flex-wrap justify-center gap-8 text-sm mb-6">
          <li className="cursor-pointer hover:underline hover:text-blue-500 transition">
            About
          </li>
          <li className="cursor-pointer hover:underline hover:text-blue-500 transition">
            Contact
          </li>
          <li className="cursor-pointer hover:underline hover:text-blue-500 transition">
            Privacy Policy
          </li>
          <li className="cursor-pointer hover:underline hover:text-blue-500 transition">
            Terms of Service
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} CryptoDCX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

