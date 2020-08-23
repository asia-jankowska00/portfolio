import React from "react";
import "../styles/pages/Homepage.scss";

import Footer from "../components/Footer";
import HeaderHomepage from "../components/HeaderHomepage";

const Homepage = () => {
  return (
    <React.Fragment>
      <HeaderHomepage></HeaderHomepage>
      <section className="padding-x-medium mt-25 padding-y-large blurb show-on-scroll">
        <h1 className="text-center">&lt;Front end developer /&gt;</h1>
        <h4 className="text-center subtitle">
          "A person who creates user interfaces and websites."
        </h4>
        <div className="flex">
          <img
            className="blurb-image hide-small hide-medium"
            src="assets/images/svg/icon-webdev.svg"
            alt=""
          />
          <div className="flex blurb-content">
            <p className="padding-y-small">
              That's me! But I do more than just build websites and interfaces –
              <br />I create elegant, thoughtful
              <strong>digital experiences</strong>,<br />
              that <strong>delight</strong> the users and
              <strong>satisfy</strong> stakeholders' expectations.
            </p>
            <div className="flex blurb-links">
              <a href="skills.html">
                <h4 className="gradient-underline-hover padding-y-extra-small">
                  my skills <i className="fas fa-long-arrow-alt-right"></i>
                </h4>
              </a>
              <a href="values.html">
                <h4 className="gradient-underline-hover padding-y-extra-small">
                  my values <i className="fas fa-long-arrow-alt-right"></i>
                </h4>
              </a>
              <a href="story.html">
                <h4 className="gradient-underline-hover padding-y-extra-small">
                  my story <i className="fas fa-long-arrow-alt-right"></i>
                </h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-x-small padding-y-medium mb-25 flex homepage-cases show-on-scroll">
        <h1 className="text-center">&lt;Projects /&gt;</h1>
        <h4 className="subtitle text-center">things I've worked on</h4>
        <a href="projects.html">
          <h4 className="padding-y-extra-small gradient-underline-hover">
            see all projects <i className="fas fa-long-arrow-alt-right"></i>
          </h4>
        </a>
        <div className="flex cases-showcase">
          <div className="case case-1">
            <div className="case-hover">
              <a href="projects/svalegaarden-mest.html">
                <h4>
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </h4>
              </a>
            </div>
          </div>
          <div className="case case-2">
            <div className="case-hover">
              <a href="projects/diabetes-dk.html">
                <h4>
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </h4>
              </a>
            </div>
          </div>
          <div className="case case-3">
            <div className="case-hover">
              <a href="projects/ungdomsringens-musikfestival.html">
                <h4>
                  View project <i className="fas fa-long-arrow-alt-right"></i>
                </h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </React.Fragment>
  );
};

export default Homepage;
