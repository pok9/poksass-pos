import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  customerInfo: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //* dispatch(addToCart(product))
    addToCart({ products }, action) {
      const product = action.payload;
      const { sku } = product;

      if (sku in products) {
        products[sku].quantity++;
      } else {
        products[sku] = {
          sku: product.sku,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
      }
    },
    removeFromCart({ products }, action) {
      //* dispatch(removeFromCart(product))
      const product = action.payload;
      const { sku } = product;
      const quantity = products[sku].quantity;

      if (quantity > 1) products[sku].quantity--;
      else delete products[sku];
    },
    clear() {
      return initialState;
    },
    setCustomerInfo(state, action) {
      //* dispatch(setCustomerInfo({ field: 'name', value: 'Somchai' }))
      const { field, value } = action.payload;

      if (!state.customerInfo) state.customerInfo = {};
      state.customerInfo[field] = value;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clear, setCustomerInfo } =
  cartSlice.actions;
