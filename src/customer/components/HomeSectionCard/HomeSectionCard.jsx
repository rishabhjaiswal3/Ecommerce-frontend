import React from "react";
import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/product/3")}
      className="cursor-pointer flex flex-col items-center bgg-whtie rounded-lg shadow-lg overflow-hidden w-[15rem] border h-[24rem] mt-5 mb-5"
    >
      <div className="h-[16rem] 2-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.imageUrl}
          alt="men_kurta"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">
            {product?.brand}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
