
import React, { useState } from "react";

import { Grid, Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import RecentOrders from "../components/RecentOrders";

import { useSelector } from "react-redux";

const drawerWidth = 10;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const stats = useSelector(
    (state) => state.dashboard.stats
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
          },
          ml: {
            sm: `${drawerWidth}px`,
          },
          backgroundColor: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        <Header />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 3 }}>
            <StatCard
              title="Total Orders"
              value={stats.totalOrders}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <StatCard
              title="Revenue"
              value={stats.revenue}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <StatCard
              title="Active Users"
              value={stats.activeUsers}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <StatCard
              title="Pending Deliveries"
              value={stats.pendingDeliveries}
            />
          </Grid>
        </Grid>

        <RecentOrders />
      </Box>
    </Box>
  );
};

export default Dashboard;