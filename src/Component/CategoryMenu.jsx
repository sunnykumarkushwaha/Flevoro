import React, { useEffect, useState } from "react";
import FoodData from '../Data/FoodData'
import { useDispatch,useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CategorySlice";


const CategoryMenu = () => {
   const [categories, setCategories] = useState([]);

   const  dispatch=useDispatch()
   const selectedCategory = useSelector((state) => state.category.category);

//  is for uniqque button 

   const listUniqueCategories = () => {
      const uniqueCategories = [
        ...new Set(FoodData.map((food) => food.category)),
      ];
      setCategories(uniqueCategories);
      console.log(uniqueCategories,"uniqueCategories");
    };
  
    useEffect(() => {
      listUniqueCategories();
    }, []);
  
   
   
  return (
   <>
    <div  className="ml-6">
        <h1 className="text-xl font-semibold"> find the best food</h1>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
            <button 
            onClick={()=>dispatch(setCategory("All"))}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
           selectedCategory === "All" && "bg-green-500 text-white"
          }`}
          >ALL</button>
           
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
             selectedCategory === category && "bg-green-500 text-white"
          }`}
            >
              {category}
            </button>
          );
        })}
        </div>
    </div>
   </>
  )
}

export default CategoryMenu