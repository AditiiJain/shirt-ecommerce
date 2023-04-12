import { useSelector, useDispatch } from "react-redux";
import { SET_SIDE_SLIDER_SHOW } from "../redux/sideSliderShowSlice";

export const useShowSideSlider = () => {
  const { sideSliderShow, type } = useSelector((state) => state.sideSliderShow);
  const dispatch = useDispatch();
  const showSideSlider = (type) => {
    let payload;
    if (type == "") {
      payload = {
        show: false,
        type: type,
      };
    } else {
      payload = {
        show: true,
        type: type,
      };
    }

    dispatch(SET_SIDE_SLIDER_SHOW(payload));
  };

  return { sideSliderShow, showSideSlider, type };
};
