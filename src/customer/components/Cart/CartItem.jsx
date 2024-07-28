import React from "react";

//       "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[6rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men slim Mid Rise Black Jeans</p>
          <p className="opacity-70">Size: L, white</p>
          <p className="opacity-70">Seller: Crishtallyo 2Fashion</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-2">
            <p className="flex-semibold">$199</p>
            <p className="opacity-50 line-through">291</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
