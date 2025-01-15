import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/Recipe-app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
