import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product, key }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={()=> navigate(`/product/2`)}
      key={key}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer p-1" 
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt="product_image"
        />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
