import React, { useEffect, useState } from "react"
import Navigation from "./Navigation"

import Typewriter from "typewriter-effect"

const Header = props => {
  const [isHomepage, setIsHomepage] = useState(false)

  useEffect(() => {
    if (window.location.pathname === "/") {
    }
  }, [])

  return (
    <header className="header">
      <Navigation></Navigation>
      <div className="text-light gradient-half-background">
        <div className="hero-image"></div>
        {/* <img
          className="header-svg"
          src="../assets/images/svg/polygon-header.svg"
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
    </header>
  )
}

export default Header
