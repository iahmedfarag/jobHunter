import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage.js";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Ennui tattooed helvetica edison bulb, polaroid asymmetrical everyday
            carry cornhole subway tile chambray lo-fi same. Food truck disrupt
            kogi locavore kinfolk, wolf jianbing tattooed tilde. Sus yuccie raw
            denim neutral milk hotel knausgaard distillery mlkshk, ascot bruh
            wolf heirloom.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunter" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
