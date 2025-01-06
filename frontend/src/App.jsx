import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/userPages/Homepage";
import Register from "./pages/userPages/Register";
import Login from "./pages/userPages/Login";
import { } from 'react-redux'
import Navbar from "./Components/userComponent/Navbar";
import Footer from "./Components/userComponent/Footer";
import Jobs from "./pages/userPages/Jobs";
import Dashboard from "./pages/userPages/Dashboard";
import PostApplication from "./pages/userPages/PostApplication";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Layout wraps around the Homepage and Register routes */}
          <Route path="/" element={<Homepage />}>
            {/* <Route index element={<Homepage />} /> */}
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
