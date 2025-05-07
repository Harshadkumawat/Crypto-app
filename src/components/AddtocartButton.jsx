import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CircleDashed } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../features/cart/cartSlice";


const wait = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function AddtocartButton({ coin }) {
  const [status, setStatus] = useState("Add to cart");
  const isEnabled = !status || status === "Add to cart";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); 
  const navigate = useNavigate();

  const changeStatus = async () => {
    if (!isEnabled) return;

    if (!user) {
      navigate("/login");
      return;
    }

    setStatus("loading");
    await wait(1500);

    dispatch(add(coin));

    setStatus("Added to cart");
    await wait(1500);

    setStatus("Add to cart");
  };

  return (
    <button
      onClick={changeStatus}
      disabled={!isEnabled}
      className="group relative h-10 min-w-full my-2 overflow-hidden rounded-md bg-teal-500 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-teal-600 disabled:opacity-50"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.075 }}
          className="flex items-center justify-center gap-1"
        >
          {status === "Added to cart" && (
            <motion.span
              className="h-fit w-fit"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.075, type: "spring" }}
            >
              <CheckCircle2 className="h-4 w-4 fill-white stroke-teal-500 group-hover:stroke-teal-600" />
            </motion.span>
          )}

          {status === "loading" ? (
            <CircleDashed className="h-4 w-4 animate-spin" />
          ) : (
            status
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
