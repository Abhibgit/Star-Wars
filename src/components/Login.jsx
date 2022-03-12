import React from "react";
import { Component } from "react";
import {
  Card,
  Input,
  CardContent,
  Button,
  Typography,
  CardActions,
} from "@mui/material";

export default class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <Card sx={{ borderRadius: 5 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: { xs: 20, md: 25 },
                marginTop: { xs: 1, md: 3 },
              }}
            >
              Get started with starwars
            </Typography>
            <div className="form-container"></div>
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                placeholder="Username"
                sx={{ marginTop: { xs: 3, md: 5 } }}
              />
              <br />
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                placeholder="Email"
                sx={{ marginTop: { xs: 1, md: 5 } }}
              />
              <br />

              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                placeholder="Password"
                sx={{ marginTop: { xs: 1, md: 5 } }}
              />
              <br />

              <Input
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
                placeholder="Confirm Password"
                sx={{ marginTop: { xs: 1, md: 5 } }}
              />
              <br />
              <Button
                type="submit"
                disabled={disable}
                variant="outlined"
                sx={{ marginTop: { xs: 3, md: 5 } }}
              >
                LOGIN
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}
