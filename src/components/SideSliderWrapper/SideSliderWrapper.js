import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import "./SideSliderWrapper.css";
import { Wishlist, Cart } from "../../index";
import ViewSimilar from "../ViewSmiliar/ViewSimilar";
import { useShowSideSlider } from "../../utils/useShowSideSlider";
import { useCart } from "../../utils/useCart";

function SideSliderWrapper() {
  const { clearCart } = useCart();
  const { showSideSlider, type } = useShowSideSlider();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="side-slider-container"
    >
      <div className="side-slider-header ">
        <motion.div
          className="go-back-icon"
          whileTap={{ scale: 0.75 }}
          onClick={() => {
            showSideSlider("");
          }}
        >
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl " />
        </motion.div>

        {type === "wishlist" && <div className="side-slider-header-head">Wishlist</div>}
        {type === "cart" && <div className="side-slider-header-head">Cart</div>}
        {type === "viewSimilar" && <div className="side-slider-header-head">Similar Shirts</div>}

        {type === "cart" && (
          <div>
            <motion.p
              whileTap={{ scale: 0.9 }}
              className="clear-cart"
              onClick={() => clearCart()}
            >
              Clear <RiRefreshFill />
            </motion.p>
          </div>
        )}
      </div>
      {type === "wishlist" && <Wishlist />}
      {type === "viewSimilar" && <ViewSimilar />}
      {type === "cart" && <Cart />}
    </motion.div>
  );
}

export default SideSliderWrapper;
