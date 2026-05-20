// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Products from './pages/Products';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;


import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

function App() {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Products */}
        <Route
          path="/products"
          element={
            isAuthenticated ? (
              <Products />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;