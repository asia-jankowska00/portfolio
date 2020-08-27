import React from "react";
import Navigation from "./Navigation";

import "../styles/components/Header.scss";
import "../styles/components/Gradient.scss";
import "../styles/components/Background.scss";

import Typewriter from "typewriter-effect";

const Header = (props) => {
  return (
    <header>
      <div className="text-light gradient-half-background">
        <div className="hero-image"></div>
        <img
          className="header-svg"
          src="../assets/images/svg/polygon-header.svg"
          alt=""
        />

        <h2 className="txt-type header-title padding-x-large padding-y-small">
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.start().changeDelay(35).typeString(props.textToType);
            }}
          />
        </h2>

        <Navigation></Navigation>
      </div>
    </header>
  );
};

export default Header;
