import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="content-wrapper">
        <div className="in-footer">
          <div>
            <h3 className="name">Car Performance</h3>
            <p className="address">
              1 Rue du style <br />
              ZA AutoMoto <br />
              01000 Ville <br />
            </p>
            <h5 className="phone">0404040404</h5>
            <h5 className="phone">0606060606</h5>
          </div>
          <div className="social">
            <Link to="">
              <img
                src="./assets/icon-fb.svg"
                alt="Facebook"
                className="icon icon-fb"
              />
            </Link>
            <Link to="">
              <img
                src="./assets/icon-tw.svg"
                alt="Twitter"
                className="icon icon-tw"
              />
            </Link>
            <Link to="">
              <img
                src="./assets/icon-in.svg"
                alt="Instagram"
                className="icon icon-in"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
