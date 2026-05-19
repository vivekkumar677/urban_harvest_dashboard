
import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/productSlice";

const drawerWidth = 10;

const Products = () => {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dispatch = useDispatch();

  const { products, search } = useSelector(
    (state) => state.products
  );

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "evenly",
            alignItems: "center",
            mb: 3,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="Search Products"
            onChange={(e) =>
              dispatch(setSearch(e.target.value))
            }
          />

          <Button variant="contained">
            Add Product
          </Button>
        </Box>

        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 6, md: 4 }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 5,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6">
                    {product.name}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {product.price}
                  </Typography>

                  <Chip
                    label={product.status}
                    color={
                      product.status === "Available"
                        ? "success"
                        : "error"
                    }
                    sx={{ mt: 2 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;