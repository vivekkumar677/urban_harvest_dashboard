import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <CardContent>
        <Typography color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h4" mt={1}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;