import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  // Assuming you have an array of recipes
  const recipes = [
    {
      id: 1,
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon and eggs',
      image: '../Image/OIP.jpg',
    },
    {
      id: 2,
      name: 'Chicken Curry',
      description: 'Spicy curry with tender chicken',
      image: '../Image/OIP.jpg',
    },
    {
      id: 3,
      name: 'Vegetable Stir-Fry',
      description: 'Colorful stir-fried vegetables',
      image: '../Image/OIP (1).jpg',
    },
    // Add more recipes as needed
  ];

  return (
    <div>
      <h1>Menu</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <div className="recipe-details">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe">View Recipe</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
