import React from "react"
// import { useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import MyHelmet from "./MyHelmet"

import ProjectsContextProvider from "../ProjectsContext"

const Layout = props => {
  // const location = useLocation()

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [location])
  const isHomepage = props.isHomepage
  return (
    <ProjectsContextProvider>
      <MyHelmet title={props.title}></MyHelmet>
      <Header isHomepage={isHomepage} textToType={props.textToType}></Header>
      {props.children}
      <Footer></Footer>
    </ProjectsContextProvider>
  )
}

export default Layout
