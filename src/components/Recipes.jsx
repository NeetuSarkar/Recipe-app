import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import "../styles/Recipe.css";

const Recipes = () => {
  const previousSearch = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "briyani",
    "salad",
    "ice cream",
    "lasagna",
    "pudding",
    "soup",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //handle  search 
  const handleSearch = async () => {
    if (searchQuery) {
      const apiKey = "907ed5a0c943420f97c777e05954bea3";
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&addRecipeInformation=true&apiKey=${apiKey}`;

      setLoading(true); // Set loading to true when fetching starts
      setError(null); // Clear any previous errors

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data.results); // Update state with fetched recipes
      } catch (err) {
        setError("Failed to fetch recipes. Please try again.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false); // Set loading to false when fetching completes
      }
    }
  };

  return (
    <div className="recipe-page">

      {/* Previous Search */}
      <div className="previous-search">
        <ul>
          {previousSearch.map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </div>

      {/* Search button */}
      <div className="search">
        <input
          type="text"
          id="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a recipe..."
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {/* Recipes Cards */}
      <div className="recipe-cards">
        {loading && <div className="loader">Loading...</div>} {/* Loader */}
        {error && <p className="error-message">{error}</p>}
        {!loading && recipes.length > 0
          ? recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe} // Pass recipe data to RecipeCard
              />
            ))
          : !loading && (
              <p>No recipes found. Please search for something else.</p>
            )}
      </div>
    </div>
  );
};

export default Recipes;
