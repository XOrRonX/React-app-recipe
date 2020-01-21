import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </p>
        <p>{calories}</p>
      </div>
    </div>
  );
};

export default Recipe;
