import React from 'react';


const HomePage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Welcome to Food Recipe Website</h1>
        <p>Explore and discover delicious recipes from around the world.</p>
       
      </div>
      <img
        src="https://i0.wp.com/makanmana.net/wp-content/uploads/2015/01/thai-restaurant-white-elephant-medan.jpg?ssl=1"
        alt="Food"
        className="homepage-image"
      />
    </div>
  );
};

export default HomePage;
