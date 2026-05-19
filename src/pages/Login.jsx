import React from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: {
              xs: 3,
              sm: 5,
            },
            borderRadius: 5,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255,255,255,0.95)",
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.15)",
          }}
        >
          {/* Logo / Title */}
          <Box
            sx={{
              textAlign: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#1B4332",
                mb: 1,
              }}
            >
              Urban Harvest
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
            >
              Sign in to continue
            </Typography>
          </Box>

          {/* Email */}
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
          />

          {/* Password */}
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
          />

          {/* Remember Me */}
          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
            sx={{
              mt: 1,
            }}
          />

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 3,
              backgroundColor: "#1B4332",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",

              "&:hover": {
                backgroundColor: "#163020",
              },
            }}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;