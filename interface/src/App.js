import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

//React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Skin from "./pages/Skins/Home";
import Heroes from "./pages/Heroes/Home";
import Type from "./pages/Types/Home";

//Images
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/skins" element={<Skin />}></Route>
          <Route path="/heroes" element={<Heroes />}></Route>
          <Route path="/types" element={<Type />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
