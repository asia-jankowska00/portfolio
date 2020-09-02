import React, { useEffect } from "react"
// import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

import ProjectsContextProvider from "../ProjectsContext"

const Layout = props => {
  // const location = useLocation()

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [location])

  return (
    <ProjectsContextProvider>
      <Header textToType={props.textToType}></Header>
      {props.children}
      <Footer></Footer>
    </ProjectsContextProvider>
  )
}

export default Layout
