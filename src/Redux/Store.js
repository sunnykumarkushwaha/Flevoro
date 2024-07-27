import React from 'react'
import { configureStore } from '@reduxjs/toolkit'  
import Cartslices from './Slices/Cartslices';
import CategorySlice from './Slices/CategorySlice';
import SearchSlice from './Slices/SearchSlice';

const Store = configureStore({
    reducer: {
      cart: Cartslices,
      category:CategorySlice,
      search:SearchSlice,
     
    },
  });
  export default Store;