import React from "react";

export default function RecipesList({ recipes, selectedRecipe, setSelectedRecipe }) {
  const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const fetchRecipeDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch recipe details");
      const data = await response.json();
      setSelectedRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Recipe Cards Column */}
        <div className={selectedRecipe ? "col-md-6" : "col-12"}>
          {recipes.length > 0 && <h3 className="mb-3">Recipes</h3>}

          <div className="d-flex flex-wrap gap-3">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="card shadow-sm"
                style={{
                  width: "200px",
                  cursor: "pointer",
                  flex: "0 0 auto",
                }}
                onClick={() => fetchRecipeDetails(recipe.id)}
              >
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.title}
                  style={{ height: "140px", objectFit: "cover" }}
                />
                <div className="card-body p-2">
                  <h6 className="card-title text-truncate">{recipe.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recipe Details Column (sticky) */}
        {selectedRecipe && (
          <div className="col-md-6">
            <div
              className="card shadow"
              style={{
                position: "sticky",
                top: "20px", // keeps 20px gap from navbar
                maxHeight: "90vh",
                overflowY: "auto", // scroll only inside details card if content is long
              }}
            >
              <div className="card-body">
                {/* 🔹 Close Button */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="mb-0">{selectedRecipe.title}</h4>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => setSelectedRecipe(null)}
                  >
                    ✖ Close
                  </button>
                </div>

                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  className="img-fluid mb-3"
                  style={{ maxWidth: "100%", borderRadius: "8px" }}
                />

                <h5>Ingredients:</h5>
                <ul>
                  {selectedRecipe.extendedIngredients.map((ing) => (
                    <li key={ing.id}>{ing.original}</li>
                  ))}
                </ul>

                <h5>Instructions:</h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedRecipe.instructions ||
                      "No instructions available.",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
