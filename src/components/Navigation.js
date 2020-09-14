import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
// import { withRouter } from "react-router";

// import "../styles/components/Navigation.scss";

const Navigation = props => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [invertNav, _setInvertNav] = useState(false)
  const [isFullNav, setIsFullNav] = useState(false)

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const [windowExists, setWindowExists] = useState(false)

  // console.log(props.match);

  // const myStateRef = useRef();
  // const viewportHeight = useRef();
  // const myStateRef = useRef();

  // const setInvertNav = (data) => {
  //   // console.log(myStateRef.current);
  //   myStateRef.current = data;
  //   _setInvertNav(data);
  // };

  const navScrollHandler = () => {
    setScrollPosition(window.pageYOffset)

    if (window.location.pathname === "/") {
      if (scrollPosition > viewportHeight * 0.9) {
        _setInvertNav(true)
        setIsFullNav(true)
      } else {
        _setInvertNav(false)
      }
    } else {
      if (scrollPosition > viewportHeight * 0.15) {
        _setInvertNav(true)
        setIsFullNav(true)
      } else {
        _setInvertNav(false)
      }
    }
  }

  useEffect(() => {
    if (windowExists) {
      let isMounted = true
      if (isMounted) {
        setViewportHeight(window.innerHeight)

        window.addEventListener("scroll", navScrollHandler)
      }
      return () => {
        isMounted = false
        if (windowExists) {
          window.removeEventListener("scroll", navScrollHandler)
        }
      }
    }
  })

  useEffect(() => {
    if (typeof window !== `undefined` && !windowExists) {
      setWindowExists(true)
    }
  }, [])

  return (
    <React.Fragment>
      <nav
        className={`nav-desktop show-on-scroll ${invertNav ? "invert" : ""} ${
          isFullNav ? "width-100" : ""
        }`}
      >
        <ul>
          <li
            className={
              invertNav ? "gradient-underline-hover" : "white-underline-hover"
            }
          >
            <Link to="/">home</Link>
          </li>
          <li
            className={
              invertNav ? "gradient-underline-hover" : "white-underline-hover"
            }
          >
            <Link to="/projects">projects</Link>
          </li>
          <li
            className={
              invertNav ? "gradient-underline-hover" : "white-underline-hover"
            }
          >
            <Link to="/skills">skills</Link>
          </li>
          <li
            className={
              invertNav ? "gradient-underline-hover" : "white-underline-hover"
            }
          >
            <Link to="/values">values</Link>
          </li>
          <li
            className={
              invertNav ? "gradient-underline-hover" : "white-underline-hover"
            }
          >
            <Link to="/story">story</Link>
          </li>

          <li>
            <a href="https://github.com/asia-jankowska00/">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/joannajankowska00/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </nav>

      <nav
        className={`nav-mobile show-on-scroll ${
          isMobileNavOpen ? "" : "pointer-events-none"
        } ${invertNav ? "invert" : ""}`}
      >
        <h2 className="margin-0">
          <i
            onClick={() => {
              setIsMobileNavOpen(!isMobileNavOpen)
            }}
            className={`fas ${
              isMobileNavOpen ? "fa-times" : "fa-bars"
            } pointer-events-initial`}
            id="menuHamburger"
          ></i>
        </h2>
        <ul className={isMobileNavOpen ? " " : "hidden"} id="menuUl">
          <li className="gradient-half-background">
            <Link to="/">home</Link>
          </li>
          <li className="gradient-half-background">
            <Link to="/projects">projects</Link>
          </li>
          <li className="gradient-half-background">
            <Link to="/skills">skills</Link>
          </li>
          <li className="gradient-half-background">
            <Link to="/values">values</Link>
          </li>
          <li className="gradient-half-background">
            <Link to="/story">story</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Navigation
