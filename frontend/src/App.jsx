import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/userComponent/Layout";
import Homepage from "./Components/userComponent/Homepage";
import Register from "./pages/userPages/Register";
import Login from "./pages/userPages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps around the Homepage and Register routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
