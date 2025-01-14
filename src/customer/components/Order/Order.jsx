import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "on_the_way" },
];

const Order = () => {
  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-whtie p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>

              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-400 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-m text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9} className="space-y-4">
          {[1, 1, 1, 1, 1].map((item) => (
            <OrderCard />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
