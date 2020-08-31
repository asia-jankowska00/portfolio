import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = props => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <React.Fragment>
      <Header textToType={props.textToType}></Header>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Layout
