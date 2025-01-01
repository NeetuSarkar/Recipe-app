import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import "../styles/ChefCard.css";

const ChiefCard = ({ chef }) => {
  const socialIcons = [facebook, twitter, instagram];

  return (
    <div className="chef">
      <div className="chef-image">
        <img src={chef.imageUrl} alt={chef.name} />
      </div>
      <div className="chef-details">
        <h3>{chef.name}</h3>
        <p>Recipes: 10</p>
        <p>Cuisine: {chef.cuisine}</p>
        <div className="chef-links">
          <a href={chef.facebookUrl} target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="clickable icon" />
          </a>
          <a href={chef.twitterUrl} target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="clickable icon" />
          </a>
          <a href={chef.instagramUrl} target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="clickable icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChiefCard;
