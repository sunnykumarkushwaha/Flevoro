import React from "react";

import { createSlice } from "@reduxjs/toolkit";

const Cartslices = createSlice({
  name: "cartslice",
  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      //  to find the simmilar card  in add to cart
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      //  if simmilar  then  save existing item and only change and update the qty of item and if not then show only items
      // and also store in a  state.cart

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },


    
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  Cartslices.actions;
export default Cartslices.reducer;
