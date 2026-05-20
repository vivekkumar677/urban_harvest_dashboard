import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  IconButton,
  Badge,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#000",
        borderRadius: 3,
        mb: 4,
        border: "1px solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          py: 1,
        }}
      >
        {/* Left Section */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1B4332",
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
              },
            }}
          >
            Urban Harvest
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Welcome back, John 👋
          </Typography>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {/* Notification */}
          <IconButton
            sx={{
              backgroundColor: "#f5f7fb",
              "&:hover": {
                backgroundColor: "#eaeaea",
              },
            }}
          >
            <Badge
              badgeContent={4}
              color="error"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* User Profile */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#f5f7fb",
              px: 1.5,
              py: 0.7,
              borderRadius: 3,
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#1B4332",
                width: 38,
                height: 38,
              }}
            >
              J
            </Avatar>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
              >
                John Doe
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;