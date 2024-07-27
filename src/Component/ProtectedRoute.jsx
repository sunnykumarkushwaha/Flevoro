import React from 'react'
import { useSelector  } from 'react-redux'
import { Navigate } from 'react-router-dom'
// cart ki item agar  zero hoo toh next page par na  jaye 


const ProtectedRoute = ({element}) => {

    
    const cartItems=useSelector((state)=>state.cart.cart)
  
  return cartItems.length>0 ? element :<Navigate to={'/'}/>

}

export default ProtectedRoute