import React, { useContext } from "react"
import { ProjectsContext } from "../ProjectsContext"

import ProjectSection from "../components/ProjectSection"
import Layout from "../components/Layout"

import "../styles/main.scss"

const Projects = props => {
  const data = useContext(ProjectsContext)
  const projects = data.projects

  return (
    <Layout textToType="< Projects />">
      {projects.map((project, index) => {
        if (index % 2 === 0) {
          return (
            <ProjectSection
              key={index}
              project={project}
              alignment="left"
            ></ProjectSection>
          )
        } else {
          return (
            <ProjectSection
              key={index}
              project={project}
              alignment="right"
            ></ProjectSection>
          )
        }
      })}
    </Layout>
  )
}

export default Projects
