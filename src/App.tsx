import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Cuisine from "./pages/Cuisine/Cuisine";
import Calories from "./pages/Calories/Calories";
import RecipeDetails from "./components/RecipeDetail/RecipeDetails";
import FindByIngredient from "./pages/FindByIngredient/FindByIngredient";
import Footer from "./components/Footer/Footer";
import { isMobile } from "./config/Breakpoint";

function App() {
  return (
    <>
      <div style={{ background: "#FFF5F7" }}>
        <nav>
          <NavBar />
        </nav>
      </div>

      <div className="App">
        <div style={{ marginTop: isMobile ? 10 : 50 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine" element={<Cuisine />} />
            <Route path="/calories" element={<Calories />} />
            <Route
              path="/recipe-details/:recipeId"
              element={<RecipeDetails />}
            />
            <Route
              path="/search-by-ingredients"
              element={<FindByIngredient />}
            />
          </Routes>
        </div>
      </div>

      <div style={{ background: "#FFF5F7" }}>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
