import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Homepage, Aboutpage } from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
