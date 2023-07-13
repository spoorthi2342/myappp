import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-primary">About</h1>

      <div className="row">
        <div className="col-md-6">
          <h3 className="text-info">Our Service</h3>
          <p>
            Our mission is to provide high-quality food Recipes serve, as a starting point for culinary creativity.
             While they provide a structured framework of ingredients and instructions, you can always add your
              personal touch to make a dish truly unique. Feel free to experiment with different flavors, spices,
               and techniques to tailor the recipe to your taste.
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="text-info">Our Vision</h3>
          <p>
          Remember, while recipes are valuable guidelines, don't be afraid to experiment and make
           adjustments based on your taste preferences. Enjoy the process of cooking, and let your 
          creativity and passion shine through as you explore the wonderful world of food recipes.
          </p>
        </div>
      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body bg-light">
          <h3 className="text-info">Additional Details</h3>
          <p>
          Recipes enable us to replicate our favorite dishes from restaurants or recreate the flavors from our
           travels. They provide a detailed roadmap, ensuring that you can enjoy a particular dish anytime you desire.
           Following a recipe allows you to capture the essence of a meal and bring it into your own kitchen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
