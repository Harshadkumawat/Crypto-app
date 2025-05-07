import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeButton from "./components/ThemeButton";
import { ToastContainer } from "react-toastify";

// Pages
import Home from "./pages/Home";
import AllCoins from "./pages/AllCoins";
import CoinsDetails from "./pages/CoinsDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${
          theme ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Navbar />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:coinQuery" element={<AllCoins />} />
          <Route path="/coins/:coinid" element={<CoinsDetails />} />
          <Route path="/cart/:cartitem" element={<Cart />} />
        </Routes>

        <ThemeButton />
        <ToastContainer />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
