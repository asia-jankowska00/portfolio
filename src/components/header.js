import React, { useEffect, useState } from "react"
import Navigation from "./Navigation"

import Typewriter from "typewriter-effect"

import ScrollAnimation from "react-animate-on-scroll"

const Header = props => {
  const isHomepage = props.isHomepage
  // const [isHomepage, setIsHomepage] = useState(false)

  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     setIsHomepage(true)
  //   }
  // }, [])

  return isHomepage ? (
    <header className="header-homepage">
      <Navigation></Navigation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="text-light gradient-half-background">
          <div className="hero-image"></div>
          <h3 className="txt-type header-title">
            <Typewriter
              options={{
                cursor: "",
              }}
              onInit={typewriter => {
                typewriter
                  .start()
                  .changeDelay(35)
                  .typeString("< hello world /> <br>")
              }}
            />
          </h3>

          <h1 className="txt-type header-title">
            <Typewriter
              options={{
                cursor: "",
              }}
              onInit={typewriter => {
                typewriter
                  .start()
                  .changeDelay(35)
                  // .typeString("< hello world /> <br>")
                  .pauseFor(1000)
                  // .deleteAll()
                  .typeString(
                    "< I'm Joanna, <br> front-end developer and designer />"
                  )
              }}
            />
          </h1>
        </div>
      </ScrollAnimation>
    </header>
  ) : (
    <header className="header">
      <Navigation></Navigation>
      {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
      <div className="text-light gradient-half-background">
        <div className="hero-image"></div>
        {/* <img
          className="header-svg"
          src="../images/svg/polygon-header.svg"
          alt=""
        /> */}

        <h2 className="txt-type header-title padding-x-large padding-y-small">
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={typewriter => {
              typewriter.start().changeDelay(35).typeString(props.textToType)
            }}
          />
        </h2>
      </div>
      {/* </ScrollAnimation> */}
    </header>
  )
}

export default Header
