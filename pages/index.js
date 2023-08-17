import React from "react";
import { Product, MainBanner, FooterBanner } from "../components/index";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <MainBanner mainBanner={bannerData && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading" id="products-hash">
        <h2>Best Selling Products</h2>
        <p>Graphic T-shirts</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[1]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
