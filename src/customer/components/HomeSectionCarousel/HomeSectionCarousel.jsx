import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    520: { items: 1.6 },
    720: { items: 2.4 },
    840: { items: 3.1 },
    1300: { items: 4 },
    1500: { items: 5.2 },
    2000: { items: 5.8 },
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard key={item.id} product={item} />);

  const slidePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : 0;
    setActiveIndex(newIndex);
  };

  const slideNext = () => {
    const newIndex =
      activeIndex < items.length - 1 ? activeIndex + 1 : items.length - 1;
    setActiveIndex(newIndex);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="justify-center relative xs:px-0 sm:px-2 px-4 lg:px-10 ">
      <h2 className="text-2xl font-extrabold text-gray-800 py5">
        {sectionName}
      </h2>
      <div className="relative xs:px-6 px-14 border border-lightgray">
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          key={activeIndex} // Force re-render on activeIndex change
        />
        {activeIndex < items.length - 1 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "2rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
