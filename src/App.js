import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar";
import MapsPage from "./pages/MapsPage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
