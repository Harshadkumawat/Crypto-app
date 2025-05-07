import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddtocartButton from "../components/AddtocartButton";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { getCoinDetails } from "../features/coin/coinSlice";


const CoinsDetails = () => {
  const { theme } = useSelector((state) => state.theme);
  const { coin, isLoading, isError } = useSelector((state) => state.coin);
  const { coinid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinDetails(coinid));
  }, [coinid]);

  if (isError) {
    return (
      <p className="text-center font-extrabold m-16 text-red-400 uppercase">
        Something went wrong.....
      </p>
    );
  }

  if (isLoading) {
    return (
      <p className="text-center font-extrabold m-16 text-gray-500 uppercase">
        Fetching Coin Details...
      </p>
    );
  }

  return (
    <div
      className={`flex flex-col ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mt-6">Coins Details</h1>

      <div className="flex-1 flex items-center justify-center p-6 mt-8">
        <div
          className={`grid grid-cols-2 gap-4 items-center w-full p-6 rounded-xl shadow-2xl border-2 ${
            theme ? "bg-black border-blue-500" : "bg-white border-gray-300"
          }`}
        >
          <div className="flex justify-center">
            <img
              src={coin?.image?.large || "image not available"}
              alt={coin.name}
              className="w-32 h-32 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold flex items-center justify-between">
              Name : {coin?.name}
              <span className="text-sm bg-yellow-500 text-black px-2 py-1 rounded-full shadow-md">
                Rank #{coin?.market_cap_rank}
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Symbol : {coin?.symbol}</p>
            <p className="text-xl font-extrabold mt-2 text-yellow-400">
              Price : {coin?.market_data?.current_price?.inr}
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {coin?.description?.en || "description not available"}
            </p>
            <AddtocartButton coin={coin} /> {/* Pass coin to AddtocartButton */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsDetails;
