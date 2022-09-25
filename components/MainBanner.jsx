import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainBanner = ({ mainBanner }) => {
  return (
    <div className="main-banner-container">
      <div>
        <p className="item">{mainBanner.smallText}</p>
        <h3>{mainBanner.midText}</h3>
        <Image src="" alt="new-item" className="main-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">{mainBanner.buttonText}</button>
          </Link>
          <div className="desc">
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
