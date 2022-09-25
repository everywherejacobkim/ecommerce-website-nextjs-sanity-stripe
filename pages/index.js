import React from 'react'
import { Product, MainBanner, FooterBanner } from '../components/index';


const Home = () => {
  return (
    <>
      <MainBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Women Jeans</p>
      </div>

      <div className='products-container'>
        {
          ['product1', 'product2'].map((product) => product )
        }
      </div>

      <FooterBanner />
    </>
  )
}

export default Home;