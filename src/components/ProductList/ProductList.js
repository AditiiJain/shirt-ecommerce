import React from 'react'
import { useSelector } from 'react-redux'

function ProductList() {
  const productItems = useSelector((state)=>state.filterItems.filterItems)
  console.log(productItems,"p")
  return (
    <div>ProductList</div>
  )
}

export default ProductList