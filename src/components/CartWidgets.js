import React, { useContext } from 'react'
import { useCartContext } from '../context/CartContext'

const CartWidgets = () => {
const { totalProducts } = useCartContext();
  return (
    <>
    <i className="bi bi-cart"></i>
    <span>{totalProducts() || ''}</span>
    </>
  )
}

export default CartWidgets