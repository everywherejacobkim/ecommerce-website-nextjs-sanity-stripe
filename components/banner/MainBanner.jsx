/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

const MainBanner = ({ mainBanner }) => {
  return (
    <div className="main-banner-container">
      <div className="main-banner-contents">
        <div className="main-banner-texts">
          <h1>{mainBanner.largeText1}</h1>
          <h3>{mainBanner.midText}</h3>
          <p className="item">{mainBanner.smallText}</p>
        </div>
        <img
          src={urlFor(mainBanner.image)}
          alt="new-item"
          className="main-banner-image"
        />
        <div>
          <Link href={`/product/${mainBanner.product}`}>
            <button type="button">{mainBanner.buttonText}</button>
          </Link>
          <div className="main-banner-desc">
            <h5>{mainBanner.desc}</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              velit ea delectus totam aperiam illum, adipisci, hic nulla quos
              officiis quis quibusdam incidunt ex, non aliquam quod voluptate at
              voluptates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
