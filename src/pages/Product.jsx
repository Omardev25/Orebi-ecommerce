import React from 'react'
import Container from '../Components/Container'

import ProductReviews from '../layouts/ProductReviews'
import ProductPurchasePanel from '../layouts/ProductPurchasePanel'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'
import Footer from '../layouts/Footer'


const Product = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <ProductPurchasePanel/>
      <ProductReviews/>
      <Footer/>
    </div>
  )
}

export default Product

