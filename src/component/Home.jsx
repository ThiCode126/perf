import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <div className="content-wrapper">
        <div className="in-hero">
          <img
            src="./assets/car-draw.svg"
            className="card-draw"
            alt="card-draw"
          />
          <div className="home-txt">
            <h1>Car Performance</h1>
            <p>Leader de la reprogrammation automobile</p>
            <Link to="/car">
              <button className="button">Sélectionner votre véhicule</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
