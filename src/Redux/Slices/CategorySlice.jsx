import React from "react";

import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name:"categorySlice",
    initialState: {
    category: "All",
  },
  reducers:{
    setCategory:(state,action)=>{
        state.category = action.payload;
    },
  },
});
export const { setCategory } = CategorySlice.actions;

export default CategorySlice.reducer