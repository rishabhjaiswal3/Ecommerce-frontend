import { Grid, Typography, Button, Link } from "@mui/material";
import React from "react";

const ListElments = ({ data }) => {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Typography className="pb-5" variant="h6">
        {data.title}
      </Typography>
      {data.items.map((item) => {
        return (
          <div>
            <Button className="pb-5" variant="h6">
              {item}
            </Button>
          </div>
        );
      })}
    </Grid>
  );
};
const Footer = () => {
  const data1 = {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  };
  const data2 = {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Insights", "Support"],
  };
  const data3 = { title: "Documentation", items: ["Guides", "API Status"] };
  const data4 = { title: "Legal", items: ["Claim", "Privacy", "Terms"] };
  return (
    <div className="bg-black text-white text-center mt-10">
      <Grid
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <ListElments data={data1} />
        <ListElments data={data2} />
        <ListElments data={data3} />
        <ListElments data={data4} />
      </Grid>
      <Grid>
        <Typography variant="body2" component="p" align="center">
            &copy; 2023 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
            Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
            Icons made by {" "} 
            <Link href="https://www.flaticon.com/authors/freepik" color="inherit" underline="always">
                FLatIcons
            </Link>
        </Typography>
        <Typography variant="body2" component="p" align="center"></Typography>
      </Grid>
    </div>
  );
};

export default Footer;
