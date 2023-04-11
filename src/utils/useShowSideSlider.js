import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const useShowSideSlider = () => {
  const [showSlider, setShowSlider] = useState({});
  const dispatch = useDispatch();
  const sideSliderShow = useSelector(
    (state) => state.sideSliderShow.sideSliderShow
  );
  useEffect(() => {
    setShowSlider({ dispatch, sideSliderShow });
    console.log(setShowSlider);
  }, []);

  console.log(setShowSlider);
  return showSlider;
};

export default useShowSideSlider;
