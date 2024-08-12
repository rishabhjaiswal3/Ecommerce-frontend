import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {

  const navigate = useNavigate();

  

  return (
    <div onClick={()=>{navigate(`/account/order/${5}`)}} className="p-5 shadow-md shadow-grey hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
              alt="men_kurta"
            />
            <div className="ml-5 space-y-2">
              <p className="mb-2">Men Slim mid rise black jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$1899</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <>

                <p>
                <AdjustIcon
                    sx={{ width: "15px", height: "15px" }}
                    className="text-green-600 mr-2"
                />
                <span>Delivered on March 03</span>
                </p>
                <p className="text-xs" >
                    Your item has been delivered
                </p>    
            </>
          )}
          {false && <p>Expected Delivery on March 04</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
