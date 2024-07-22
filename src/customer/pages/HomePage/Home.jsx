import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/men_kurta";
const Home = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center">
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta"/>
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Shoes"/>
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Shirt"/>
        <HomeSectionCarousel data={mens_kurta} sectionName="Women's Saree"/>
        <HomeSectionCarousel data={mens_kurta} sectionName="Women's Dress"/>
      </div>
    </div>
  );
};

export default Home;
