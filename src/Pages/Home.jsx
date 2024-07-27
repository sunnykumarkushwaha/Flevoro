import React from 'react'
import Navbar from '../Component/Navbar'
import CategoryMenu from '../Component/CategoryMenu'
import FoodItems from '../Component/FoodItems'
import Cart from '../Component/Cart'

const Home = () => {
  return (
    <>
          
    <Navbar></Navbar>
    <CategoryMenu></CategoryMenu>
    <FoodItems></FoodItems>
    <Cart></Cart>
    </>
  )
}

export default Home