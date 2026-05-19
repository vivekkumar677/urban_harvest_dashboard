import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        stats: {
            totalOrders: 1500,
            revenue: "$19,500",
            activeUsers: 300,
            pendingDeliveries: 45,
        },
    },
});

export default dashboardSlice.reducer;