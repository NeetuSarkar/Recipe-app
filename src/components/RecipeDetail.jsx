import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const apiKey = "907ed5a0c943420f97c777e05954bea3"; // Your actual API key
        const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setError("Failed to load recipe details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Ensure recipe data is available before rendering
  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <div className="image">
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div>
          <p>{recipe.summary.replace(/<[^>]+>/g, "")}</p>
        </div>
      </div>

      <div>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.extendedIngredients &&
          recipe.extendedIngredients.length > 0 ? (
            recipe.extendedIngredients.map((ingredient, index) => (
              <li key={ingredient.id || index}>{ingredient.original}</li> // Fallback to index if id is not unique
            ))
          ) : (
            <p>No ingredients available</p>
          )}
        </ul>
      </div>

      <div>
        <h3>Instructions:</h3>
        <ul>
          {recipe.analyzedInstructions &&
          recipe.analyzedInstructions.length > 0 &&
          recipe.analyzedInstructions[0].steps.length > 0 ? (
            recipe.analyzedInstructions[0].steps.map((step, index) => (
              <li key={step.number || index}>{step.step}</li> // Use step number or index if no unique id
            ))
          ) : (
            <p>No instructions available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
