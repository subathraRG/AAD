import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as L, useNavigate } from "react-router-dom";
import axios from "axios";

const defaultTheme = createTheme();

export default function SignUp() {
  let nav = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  function createUser() {
    let users = {
      name:
        document.querySelectorAll("input")[0].value +
        document.querySelectorAll("input")[1].value,
      email: document.querySelectorAll("input")[2].value,
      mobile: document.querySelectorAll("input")[3].value,
      password: document.querySelectorAll("input")[4].value,
      role: document.querySelectorAll("input")[5].checked ? "admin" : "user",
    };
    let flag = true;
    for (let i in users) {
      if (users[i] == "") {
        flag = false;
        alert(`enter ${i} value`);
      }
    }
    if (flag) {
      // curl -X POST -H "Content-Type: application/json" -d '{"name": "ab", "email": "c", "mobile": "d", "password": "e", "role": "admin"}' http://localhost:8080/users/createuser
      console.log(users);
      axios
        .post("http://localhost:8080/users/createuser", users)
        .then((ev) => {
          if (ev.status == 201) {
            nav("/signin");
          }
        })
        .catch((er) => console.log("error" + er));
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="Mobile Number"
                  name="number"
                  autoComplete="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="admin" color="primary" />}
                  label="enable to create admin account"
                />
              </Grid>
            </Grid>
            {/* <L to={"/signin"}> */}
            <Button
              onClick={() => {
                createUser();
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* </L> */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
