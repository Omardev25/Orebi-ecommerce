import React from 'react'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'
import Banner from '../layouts/Banner'
import Information from '../layouts/Information'
import Ads from '../layouts/Ads'
import PromoText from '../Components/PromoText'
import NewArrivals from '../layouts/NewArrivals'
import Bestsellers from '../layouts/Bestsellers'
import FeaturedProduct from '../layouts/FeaturedProduct'
import SpecialOffers from '../layouts/SpecialOffers'
import Footer from '../layouts/Footer'




const Home = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Banner/>
      <Information/>
      <Ads/>
      <PromoText/>
      <NewArrivals/>
      <Bestsellers/>
      <FeaturedProduct/>
      <SpecialOffers/>
      <Footer/>
    </div>
  )
}

export default Home

