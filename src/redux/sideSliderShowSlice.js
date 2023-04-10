import { createSlice } from "@reduxjs/toolkit";

const sideSliderShowSlice = createSlice({
  name: "sideSliderShow",
  initialState: {
    sideSliderShow: false,
    type:""
  },
  reducers: {
    SET_SIDE_SLIDER_SHOW: (state, action) => {
      const {show,type} = action.payload
      state.sideSliderShow = show;
      state.type = type;
    },
  
  },
});

export const { SET_SIDE_SLIDER_SHOW } = sideSliderShowSlice.actions;
export default sideSliderShowSlice.reducer;
