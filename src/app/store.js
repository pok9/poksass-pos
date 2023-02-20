import { configureStore } from "@reduxjs/toolkit";
import cart from "features/cart/cartSlice";
import ui from "features/ui/uiSlice"

export const store = configureStore({
  reducer: {
    cart,
    ui,
  },
});
