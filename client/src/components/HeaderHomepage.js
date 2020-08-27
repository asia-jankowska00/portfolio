import React from "react";
import Navigation from "./Navigation";

import "../styles/components/Header.scss";
import "../styles/components/Gradient.scss";
import "../styles/components/Background.scss";

import Typewriter from "typewriter-effect";

const HeaderHomepage = () => {
  return (
    <header className="header-homepage show-on-scroll">
      <div className="hero-image"></div>
      <div className="text-light gradient-half-background">
        <img
          className="header-svg"
          src="assets/images/svg/polygon-header.svg"
          alt=""
        />

        <Navigation></Navigation>

        <h3 className="txt-type header-title">
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .start()
                .changeDelay(35)
                .typeString("< hello world /> <br>");
            }}
          />
        </h3>

        <h1 className="txt-type header-title">
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .start()
                .changeDelay(35)
                // .typeString("< hello world /> <br>")
                .pauseFor(1000)
                // .deleteAll()
                .typeString(
                  "< I'm Joanna, <br> front-end developer and designer />"
                );
            }}
          />
        </h1>

        {/* <h3
          className="txt-type header-title"
          data-wait="500"
          data-words='"&lt; hello world / &gt;"'
        ></h3>
        <h1
          className="txt-type header-title"
          data-wait="1800"
          data-words='"I&apos;m Joanna &lt;br/ &gt; - a front end developer."'
        ></h1> */}
      </div>
    </header>
  );
};

export default HeaderHomepage;
