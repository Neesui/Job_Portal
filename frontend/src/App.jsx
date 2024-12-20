import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/userComponent/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
