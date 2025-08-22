import React, { useState } from "react";

export default function Search({ setRecipes }) {
  const [query, setQuery] = useState("");
  const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault(); // stop refresh
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=21&apiKey=${API_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch recipes");

      const data = await response.json();
      setRecipes(data.results || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <form className="d-flex" role="search" onSubmit={handleSearch}>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search recipes..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>

  );
}
