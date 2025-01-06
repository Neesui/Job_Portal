import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/userComponent/Layout";
import Homepage from "./pages/userPages/Homepage";
import Register from "./pages/userPages/Register";
import Login from "./pages/userPages/Login";
import { } from 'react-redux'
import Navbar from "./Components/userComponent/Navbar";
import Footer from "./Components/userComponent/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Layout wraps around the Homepage and Register routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/post/application/:jobId" element={<PostApplication />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
