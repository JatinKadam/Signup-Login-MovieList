import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextField, Button, Paper, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const info = useSelector((state) => state);
  const [loginData, setloginData] = useState({
    name: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(info);
    console.log(loginData);
    if (JSON.stringify(loginData) === JSON.stringify(info)) {
      history.push("/Movie");
    } else {
      history.push("/NoLogin");
    }
  }
  let paperStyle = {
    padding: "40px 40px",
    height: "50vh",
    width: "280px",
    margin: "200px auto ",
  };

  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <Grid align="center">
          <h2 style={{ fontFamily: "verdana" }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              name="Name"
              placeholder="Name"
              variant="outlined"
              value={loginData.name}
              onChange={(e) =>
                setloginData({ ...loginData, name: e.target.value })
              }
              fullWidth
            />
            <TextField
              name="Password"
              placeholder="Password"
              variant="outlined"
              value={loginData.password}
              onChange={(e) =>
                setloginData({ ...loginData, password: e.target.value })
              }
              fullWidth
            />
            <Button
              variant="contained"
              style={{ margin: "10px auto" }}
              fullWidth
              type="submit"
              color="secondary"
            >
              login
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Login;
