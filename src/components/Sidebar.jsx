// // import React from "react";
// // import {
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemButton,
// //   ListItemText,
// //   Toolbar,
// // } from "@mui/material";

// // import { Link } from "react-router-dom";

// // const Sidebar = () => {
// //   return (
// //     <Drawer
// //       variant="permanent"
// //       sx={{
// //         width: 240,
// //         flexShrink: 0,
// //         "& .MuiDrawer-paper": {
// //           width: 240,
// //           boxSizing: "border-box",
// //           backgroundColor: "#1B4332",
// //           color: "#fff",
// //         },
// //       }}
// //     >
// //       <Toolbar>
// //         <h2>Urban Harvest</h2>
// //       </Toolbar>

// //       <List>
// //         <ListItem disablePadding>
// //           <ListItemButton component={Link} to="/">
// //             <ListItemText primary="Dashboard" />
// //           </ListItemButton>
// //         </ListItem>

// //         <ListItem disablePadding>
// //           <ListItemButton component={Link} to="/products">
// //             <ListItemText primary="Products" />
// //           </ListItemButton>
// //         </ListItem>
// //       </List>
// //     </Drawer>
// //   );
// // };

// // export default Sidebar;

// import React from "react";

// import {
//   Box,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Toolbar,
//   Typography,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";

// import { Link } from "react-router-dom";

// const drawerWidth = 240;

// const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
//   const drawerContent = (
//     <div>
//       <Toolbar>
//         <Typography variant="h6" fontWeight="bold">
//           Urban Harvest
//         </Typography>
//       </Toolbar>

//       <List>
//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/">
//             <ListItemText primary="Dashboard" />
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding>
//           <ListItemButton component={Link} to="/products">
//             <ListItemText primary="Products" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </div>
//   );

//   return (
//     <>
//       {/* Mobile Hamburger Button */}
//       <Box
//         sx={{
//           display: { sm: "none" },
//           position: "fixed",
//           top: 15,
//           left: 15,
//           zIndex: 2000,
//         }}
//       >
//         <IconButton
//           color="inherit"
//           edge="start"
//           onClick={handleDrawerToggle}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Box>

//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: "block", sm: "none" },
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             backgroundColor: "#1B4332",
//             color: "#fff",
//           },
//         }}
//       >
//         {drawerContent}
//       </Drawer>

//       {/* Desktop Drawer */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: "none", sm: "block" },
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//             backgroundColor: "#1B4332",
//             color: "#fff",
//           },
//         }}
//         open
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// };

// export default Sidebar;

import React from "react";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link, useLocation } from "react-router-dom";

const drawerWidth = 260;

const Sidebar = ({
  mobileOpen,
  handleDrawerToggle,
}) => {
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      text: "Products",
      icon: <Inventory2Icon />,
      path: "/products",
    },
  ];

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(180deg, #1B4332 0%, #081C15 100%)",
        color: "#fff",
      }}
    >
      {/* Logo */}
      <Toolbar
        sx={{
          py: 3,
          px: 3,
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            Urban Harvest
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
            }}
          >
            Admin Dashboard
          </Typography>
        </Box>
      </Toolbar>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,0.08)",
        }}
      />

      {/* Navigation */}
      <List
        sx={{
          px: 2,
          py: 3,
          flexGrow: 1,
        }}
      >
        {menuItems.map((item) => {
          const active =
            location.pathname === item.path;

          return (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                mb: 1,
              }}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: 3,
                  py: 1.3,

                  backgroundColor: active
                    ? "rgba(255,255,255,0.12)"
                    : "transparent",

                  "&:hover": {
                    backgroundColor:
                      "rgba(255,255,255,0.08)",
                    transform: "translateX(5px)",
                  },

                  transition: "all 0.3s ease",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: active
                      ? 600
                      : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Bottom User Section */}
      <Box
        sx={{
          p: 2,
        }}
      >
        <Divider
          sx={{
            borderColor:
              "rgba(255,255,255,0.08)",
            mb: 2,
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:
              "space-between",
            backgroundColor:
              "rgba(255,255,255,0.06)",
            borderRadius: 3,
            p: 1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#52B788",
              }}
            >
              J
            </Avatar>

            <Box>
              <Typography
                variant="body2"
                fontWeight={600}
              >
                John Doe
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  opacity: 0.7,
                }}
              >
                Administrator
              </Typography>
            </Box>
          </Box>

          <IconButton
            sx={{
              color: "#fff",
            }}
          >
            <LogoutIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Hamburger */}
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          position: "fixed",
          top: 12,
          left: 12,
          zIndex: 2000,
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: "#fff",
            boxShadow: 3,
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            border: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },

          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;