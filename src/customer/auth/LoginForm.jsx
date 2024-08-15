import { Grid, TextField, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Auth/Action";

const LoginForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(login(userData));
    }

  // useEffect(()=>{
  //   if(jwt) {
  //     dispatch(getUser(jwt));
  //   }
  //   },[jwt,auth.jwt]);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
          <Grid  item xs={12} sm={12}>
            <Button sx={{padding:'.8rem 0',bgcolor:'#9155FD'}} className="bg-[#9155FD] w-full" type="submit" variant='contained' size="large">
                Login 
            </Button>
          </Grid>
        </Grid>
      </form>
      <div
            style={{ marginTop: 4, display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <span>don't have any account, ?</span>
              <Button onClick={() => navigate("/signup")}>Sign Up</Button>
            </div>
          </div>
    </div>
  );
};

export default LoginForm;
