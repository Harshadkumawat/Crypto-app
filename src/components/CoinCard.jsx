import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CoinCard = ({ coin, index }) => {
  const { theme } = useSelector((state) => state.theme);

  const colors = [
    "bg-red-900",
    "bg-blue-900",
    "bg-green-900",
    "bg-purple-900",
    "bg-yellow-600",
  ];

  const bgColor = colors[index % colors.length];

  return (
    <div className="p-4 flex justify-center">
      <div
        className={`text-white shadow-lg rounded-xl p-5 w-70 min-h-[320px] flex flex-col items-center justify-between ${bgColor}`}
      >
        <img
          src={coin.large}
          alt={coin.name}
          className="w-16 h-16 object-contain"
        />

        <h2 className=" text-lg font-bold text-center">{coin.name} </h2>

        <p className="text-gray-300 text-center text-sm px-2">
          {coin.name} is a popular cryptocurrency.
        </p>

        <Link
          to={`/coins/${coin.id}`}
          className="bg-white text-black px-4 py-2 rounded-lg text-sm mt-2 hover:bg-gray-200 transition"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default CoinCard;
