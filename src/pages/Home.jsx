import TrendingCoin from "../components/TrendingCoin";
import Form from "../components/Form";
import { useSelector } from "react-redux";

const Home = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={theme ? " bg-black p-8 md:px-16 " : " bg-white p-8 md:px-16"}
    >
      
      <h1
        className={`font-extrabold text-3xl sm:text-4xl text-center my-6 leading-tight ${
          theme ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Trade with Confidence, <br className="hidden sm:block" /> Invest with
        Vision – The Best Crypto Market!
      </h1>

      <Form />
      <TrendingCoin />
    </div>
  );
};

export default Home;
