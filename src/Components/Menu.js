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
      image: "https://www.cookingclassy.com/wp-content/uploads/2016/11/vegetable-lasagna-soup-4-560x840.jpg",
    },
    {
      id: 2,
      name: 'Chicken Curry',
      description: 'Spicy curry with tender chicken',
      image: 'https://www.healthy-delicious.com/wp-content/uploads/2020/01/easy-cabbage-soup-recipe-Healthy-Delicious-Double-Size-3-768x1152.jpg',
    },
    {
      id: 3,
      name: 'Vegetable Stir-Fry',
      description: 'Colorful stir-fried vegetables',
      image: 'https://i.pinimg.com/originals/08/af/e8/08afe8667164c09effe7f5cbc35678aa.jpg',
    },
    // Add more recipes as needed
  ];

  return (
    <div>
      <h1>Menu</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
            <div className="recipe-details">
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
