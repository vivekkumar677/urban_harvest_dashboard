// import React from "react";
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Chip,
// } from "@mui/material";

// import orders from "../data/orders";

// const RecentOrders = () => {
//   return (
//     <TableContainer component={Paper} sx={{ mt: 4 }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Order ID</TableCell>
//             <TableCell>Customer</TableCell>
//             <TableCell>Amount</TableCell>
//             <TableCell>Status</TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {orders.map((order) => (
//             <TableRow key={order.id}>
//               <TableCell>{order.id}</TableCell>
//               <TableCell>{order.customer}</TableCell>
//               <TableCell>{order.amount}</TableCell>
//               <TableCell>
//                 <Chip
//                   label={order.status}
//                   color={
//                     order.status === "Delivered"
//                       ? "success"
//                       : "warning"
//                   }
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default RecentOrders;

import React from "react";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

import orders from "../data/orders";

const RecentOrders = () => {
  return (
    <Box sx={{ mt: 5 }}>
      {/* Section Title */}
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
        }}
      >
        Recent Orders
      </Typography>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.amount}</TableCell>

                <TableCell>
                  <Chip
                    label={order.status}
                    color={
                      order.status === "Delivered"
                        ? "success"
                        : "warning"
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecentOrders;