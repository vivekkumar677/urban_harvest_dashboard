import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import dashboardReducer from '../redux/dashboardSlice';
import productReducer from '../redux/productSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
        products: productReducer,
    },
});