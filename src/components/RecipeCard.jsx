import React from "react";
import { Link } from "react-router-dom";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const getShortSummary = (summary) => {
    if (!summary) return "No summary available.";
    return (
      summary
        .replace(/<[^>]+>/g, "")
        .split(" ")
        .slice(0, 30)
        .join(" ") + "..."
    );
  };

  return (
    <div className="recipe-card">
      <div className="recipe-img">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-details">
        <h4>{recipe.title}</h4>
        <p>{getShortSummary(recipe.summary)}</p>
        <Link to={`/recipes/${recipe.id}`} state={{ recipe }}>
          VIEW DETAILS
        </Link>{" "}
        {/* Updated Link */}
      </div>
    </div>
  );
};

export default RecipeCard;
