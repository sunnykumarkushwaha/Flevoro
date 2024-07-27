import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  console.log('search',search)
  const dispatch = useDispatch();




  

  const handleToast = (name) => toast.success(`Added items ${name} `);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">


        {FoodData.filter((food) => {
          if (category === "All") {
            {/* lowercase because all the name is mixed latter so convert into lower that  easy to search  */}
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            {
              /* sirf whi return kro joo food.category is milti ho  */
            }

            {
              /* means  agar user brekefast  pe click kiya toh us er ka food.category ===breakefast  */
            }
            {
              /* toh sirf breakefast wale ko ki  return kro  */
            }
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());;
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          ></FoodCard>
        ))}

        {/* {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
              
            ></FoodCard>
          );
        })} */}
      </div>
    </>
  );
};

export default FoodItems;
