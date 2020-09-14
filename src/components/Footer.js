import React from "react"

import ScrollAnimation from "react-animate-on-scroll"

const Footer = props => {
  return (
    <footer className="text-light">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="footer-wrapper show-on-scroll">
          <h3>&lt; Sounds interesting? /&gt;</h3>
          <h6 className="text-thin">
            Let's talk about what we can make together:
          </h6>
          <a href="mailto:asia.jankowska00@gmail.com">
            <h5>asia.jankowska00@gmail.com</h5>
          </a>
          {/* <a href="" className="resume-link">My resume <i className="fas fa-file"></i></a> */}
          <div className="flex">
            <h1>
              <a href="https://github.com/asia-jankowska00/">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/joannajankowska00/">
                <i className="fab fa-linkedin"></i>
              </a>
            </h1>
            <h6 className="text-thin back-to-top">
              <button
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
                className="white-underline-hover padding-y-extra-small"
              >
                Back to top <i className="fas fa-arrow-up"></i>
              </button>
            </h6>
            <h6 className="text-thin copyright">&copy; Joanna Jankowska</h6>
          </div>
        </div>
      </ScrollAnimation>
      <div className="footer-gradient gradient-half-background"></div>
    </footer>
  )
}

export default Footer
