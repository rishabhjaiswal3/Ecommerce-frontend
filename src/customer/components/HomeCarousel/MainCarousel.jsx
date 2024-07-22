import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./CarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((data, index) => {
    return (
      <img
        src={data.image}
        className="cursor-pointer"
        role="presentation"
        alt={`carousel_image ${index}`}
      />
    );
  });

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayControls={1000}
      infinite
    />
  );
};

export default MainCarousel;
