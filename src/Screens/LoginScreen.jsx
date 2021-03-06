import React, { useState } from "react";
import Login from "../components/Login";
import { Button, Card, Grid } from "@mui/material";

export default function AuthPage(props) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={10} md={5} sx={{ margin: 10 }}>
        <div>
          <Login />
          <Button
            onClick={() => setShowLogin(!showLogin)}
            className="auth-page-login-btn"
          >
            {showLogin
              ? "Not a member? Click here to sign up"
              : "Already a member? Click here to log in"}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
