import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/userComponent/Layout";
import Homepage from "./Components/userComponent/Homepage";
import Register from "./pages/userPages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps around the Homepage and Register routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
