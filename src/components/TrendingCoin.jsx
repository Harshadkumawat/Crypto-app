import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTrendingCoins } from "../features/coin/coinSlice";



const TrendingCoin = () => {
  const { trendingCoins, isLoading, isError } = useSelector(
    (state) => state.coin
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingCoins());
  }, [dispatch]);

  if (isError) {
    return (
      <p className="text-center font-extrabold m-16 text-red-400 uppercase">
        Something went wrong...
      </p>
    );
  }

  if (isLoading) {
    return (
      <p className="text-center font-extrabold m-16 text-gray-500 uppercase">
        Fetching Trending Coins...
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center gap-3 flex-wrap mt-6">
      {trendingCoins.map((coin) => (
        <Link
          key={coin.item.id}
          to={`/coins/${coin.item.id}`}  
          className="bg-gray-100 text-gray-700 font-semibold p-3 border rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition"
        >
          {coin.item.name}
        </Link>
      ))}
    </div>
  );
};

export default TrendingCoin;
