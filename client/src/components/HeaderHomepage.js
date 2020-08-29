import React from "react";

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
      </div>
    </header>
  );
};

export default HeaderHomepage;
