import React from "react";
import "./FoodBeverages.css"; // Import the CSS file for styling

const FoodBeverages = () => {
  return (
    <div className="food-container">
      <h2>Food & Beverages in Penang</h2>
      <p>
        Penang is a food lover's paradise! Here are some must-try dishes when visiting:
      </p>
      <div className="food-list">
        <div className="food-item">
          <img src="/images/char-kway-teow.jpg" alt="Char Kway Teow" />
          <h3>Char Kway Teow</h3>
          <p>Stir-fried noodles with prawns, eggs, and bean sprouts.</p>
        </div>
        <div className="food-item">
          <img src="/images/asam-laksa.jpg" alt="Asam Laksa" />
          <h3>Asam Laksa</h3>
          <p>A tangy fish-based noodle soup with tamarind.</p>
        </div>
        <div className="food-item">
          <img src="/images/cendol.jpg" alt="Cendol" />
          <h3>Cendol</h3>
          <p>A refreshing dessert with green jelly, coconut milk, and palm sugar syrup.</p>
        </div>
      </div>
    </div>
  );
};

export default FoodBeverages;
