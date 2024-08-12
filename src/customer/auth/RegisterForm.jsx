import { Grid, TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {


    const navigate =useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("====>", data);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log("user data is ", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoCompleted="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoCompleted="given-name"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoCompleted="email"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoCompleted="password"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
            >
              Register
            </Button>
          </Grid>
      
        </Grid>
      </form>
      <div
            style={{ marginTop: 4, display: "flex", justifyContent: "center"}}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <span>If you have already account ?</span>
              <Button onClick={() => navigate("/login")}>Login</Button>
            </div>
          </div>
    </div>
  );
};

export default RegisterForm;
