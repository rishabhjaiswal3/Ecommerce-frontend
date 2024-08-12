import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { Divider, Button } from "@mui/material";

const Cart = () => {

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout?step=2')
  }



  return (
    <div>
      <div className="grid lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <p className="uppercase font-bold opacityi-60 pb-4">Price Details</p>
          <Divider />
          <div className="space-y-3 font-semibold mb-2">
            <div className="flex justify-between  pt-3 text-black">
              <span>Price</span>
              <span>$684</span>
            </div>
            <div className="flex justify-between  pt-3 ">
              <span>Discount</span>
              <span className="text-green-600">-$357</span>
            </div>
            <div className="flex justify-between  pt-3 text-black">
              <span>Delivery charge</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between  pt-3 text-black">
              <span>Total Amount</span>
              <span className="text-green-600">$327</span>
            </div>
          </div>
          <Button
            onClick = {handleCheckout}
            variant="contained"
            className="w-full mt-5"
            sx={{
              px: "2.1rem",
              py: "1.2rem",
              mt: "1.5rem",
              bgcolor: "#9155fd",
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
