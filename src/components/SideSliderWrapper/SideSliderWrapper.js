import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { SET_SIDE_SLIDER_SHOW } from "../../redux/sideSliderShowSlice";
import "./SideSliderWrapper.css";
import { Wishlist } from "../../index";
import ViewSimilar from "../ViewSmiliar/ViewSimilar";

function SideSliderWrapper() {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.sideSliderShow.type);
  const showSideSlider = () => {
    const payload = {
      show: false,
      type: "",
    };
    dispatch(SET_SIDE_SLIDER_SHOW(payload));
  };

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
            showSideSlider();
          }}
        >
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl " />
        </motion.div>

        {type === "wishlist" && <div>Wishlist</div>}
        {type === "cart" && <div>Cart</div>}
        {type === "viewSimilar" && <div>Similar Shirts</div>}
        {/* <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p> */}
      </div>
      {type === "wishlist" && <Wishlist />}
      {type === "viewSimilar" && <ViewSimilar />}
      {type === "cart" && <div>Cart</div>}
    </motion.div>
  );
}

export default SideSliderWrapper;
