import React from "react";
import "./Hotels.css"; // Import the CSS file for styling

const Hotels = () => {
  return (
    <div className="hotels-container">
      <h2>Hotels in Penang</h2>
      <p>Here are some top-rated hotels in Penang:</p>
      <div className="hotel-list">
        <div className="hotel-item">
          <img src="/images/e-o-hotel.jpg" alt="E&O Hotel" />
          <h3>E&O Hotel</h3>
          <p>A luxurious colonial-style hotel in George Town.</p>
        </div>
        <div className="hotel-item">
          <img src="/images/hard-rock-hotel.jpg" alt="Hard Rock Hotel" />
          <h3>Hard Rock Hotel</h3>
          <p>A family-friendly beach resort in Batu Ferringhi.</p>
        </div>
        <div className="hotel-item">
          <img src="/images/blue-mansion.jpg" alt="Cheong Fatt Tze Mansion" />
          <h3>Cheong Fatt Tze Mansion</h3>
          <p>A heritage boutique hotel known as "The Blue Mansion."</p>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
