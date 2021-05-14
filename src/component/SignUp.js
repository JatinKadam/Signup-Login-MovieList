import React from "react";
import { TextField, Button, Paper, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginData from "../actions/Login";
const SignUp = () => {
  const history = useHistory();
  const [input, setInput] = useState({ name: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginData(input));
    history.push("/login");
  };
  let paperStyle = {
    padding: "40px 40px",
    height: "50vh",
    width: "280px",
    margin: "200px auto ",
  };
  return (
    <div>
      <Grid>
        <Paper elevation={5} style={paperStyle}>
          <Grid align="center" fontFamily="Monospace">
            <h2 style={{ fontFamily: "verdana" }}>Sign-Up</h2>

            <form onSubmit={handleSubmit}>
              <TextField
                name="Name"
                placeholder="Name"
                variant="outlined"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                fullWidth
              />
              <TextField
                name="Password"
                placeholder="Password"
                type="password"
                variant="outlined"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin: "10px auto" }}
                fullWidth
              >
                SignUp
              </Button>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
export default SignUp;
