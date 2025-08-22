import React, { useState } from "react";
import Header from "./MyComponents/Header";
import RecipesList from "./MyComponents/RecipesList";
import Footer from "./MyComponents/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      {/* Navbar */}
      <Header setRecipes={setRecipes} />

      {/* Main content grows to fill screen */}
      <main>
        <RecipesList
          recipes={recipes}
          selectedRecipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
        />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
