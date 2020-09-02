/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"

import ProjectsContextProvider from "./src/ProjectsContext"

export const wrapRootElement = ({ element }) => (
  <ProjectsContextProvider>{element}</ProjectsContextProvider>
)

// You can delete this file if you're not using it
