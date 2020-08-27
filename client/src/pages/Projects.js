import React, { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../ProjectsContext";
import ProjectSection from "../components/ProjectSection";
import Layout from "../components/Layout";

import "../styles/pages/Projects.scss";

// const data = {
//   projects: [
//     {
//       projectPath: "svalegaarden-mest",
//       name: "Svalegaarden Mest",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       roles: ["Main designer", "CSS animator", "JavaScript developer"],
//       subtitle: "Responsive website",
//       displayImage: "",
//       longDescriptionFP: `Svalegaarden Mest is function room company that emphasizes memorability and
//        atmosphere as some of the core values for the experiences they want to provide to their customers.
//         The aim of the project was to separate the part of the website aimed at private customers, while
//          complying with the brand guidelines and optimizing the Information Architecture.`,
//       longDescriptionSP: "",
//       linkGithub: "https://github.com/joanna-00/svalegaarden-mest",
//       linkLive:
//         "http://des-iis.ucn.dk/mmdi0919/1081578/sem1/mmd1/svalegaarden-mest/",
//       sectionOneTitle: "Process summary",
//       sectionOneBodyFP: `Since our solution wasn’t going to be made from scratch, but rather a revamp
//        of the old website, we needed to get a good understanding of content. We created a content
//         inventory and later used affinity diagrams to create a robust information architecture for the new site.`,
//       sectionOneBodySP: `User testing played a large part in the process. We carried out several user tests,
//        which resulted in valuable feedback in how to further improve the project. The final product respected
//         the users preferences and mental models, resulting in a good overall experience.`,
//       sectionOneImage: "",
//       sectionTwoTitle: "Design",
//       sectionTwoBodyFP: `I was in charge of coming up with the design of the site. We were given a design brief
//        that we had to follow, including typefaces and color scheme. The design had to follow the client brief
//         guidelines, expressing the qualities of luxury, elegance and an overall modern feeling. In order to
//          facilitate those requirements, I created a high fidelity mockup using Adobe XD, and later assisted in implementing it with code.`,
//       sectionTwoBodySP: "",
//       sectionTwoImage: "",
//       sectionThreeTitle: "JavaScript & CSS animations",
//       sectionThreeBodyFP: `In addition to coding interactions with JavaScript, I created fade-in animations that appear
//        as the user scrolls along the page. On top of that I took care of animating small parts of the interface that
//         needed it the most, like drop-downs and menus.`,
//       sectionThreeBodySP: "",
//       sectionThreeImage: "",
//     },
//     {
//       projectPath: "it-just-forks",
//       name: "It just forks",
//       technologies: ["React", "react-router", "TailwindCSS"],
//       roles: ["Main designer", "Main developer"],
//       subtitle: "React application",
//       displayImage: "",
//       longDescriptionFP: `The aim of the project was the exploration of the most modern features of React,
//        along with strengthening my skills in ES6 Javascript and handling asynchronous code with promises and async/await.`,
//       longDescriptionSP: "",
//       linkGithub: "https://github.com/asia-jankowska00/react-recipe-app",
//       linkLive: "https://asia-jankowska00.github.io/react-recipe-app/",
//       sectionOneTitle: "React",
//       sectionOneBodyFP: `The project was realized using the React framework. In the code structure, I utilized a range
//        of modern features, including functional components and hooks. I used the react router to navigate between
//         different parts of the app.`,
//       sectionOneBodySP: "",
//       sectionOneImage: "",
//       sectionTwoTitle: "Tailwind",
//       sectionTwoBodyFP: `The visual side of the project was achieved with the use of Tailwind CSS. I find it’s
//        utility-based system to be very flexible and convenient to use. I used Tailwind’s responsiveness model
//         to create an app that would scale to any device.`,
//       sectionTwoBodySP: "",
//       sectionTwoImage: "",
//       sectionThreeTitle: "",
//       sectionThreeBodyFP: "",
//       sectionThreeBodySP: "",
//       sectionThreeImage: "",
//     },
//     {
//       projectPath: "diabetes-dk",
//       name: "Diabetes.dk",
//       technologies: ["HTML", "CSS", "JavaScript"],
//       roles: ["Project manager", "Designer", "Main JavaScript developer"],
//       subtitle: "Mobile single-page web app",
//       displayImage: "",
//       longDescriptionFP: `Diabetes Association is an organization for helping diabetics in their daily lives.
//        As part of fulfilling this goal, they have issued a ‘shopping guide’ - a guide for choosing foods
//         that are suitable for diabetics when grocery shopping. The task was to digitize the shopping guide by creating a mobile application.`,
//       longDescriptionSP: "",
//       linkGithub: "https://github.com/joanna-00/DiabetesWebApp",
//       linkLive:
//         "http://des-iis.ucn.dk/mmdi0919/1081581/sem2/theme1/diabetes_app/",
//       sectionOneTitle: "Process summary",
//       sectionOneBodyFP: `We worked with a range of user research methods in order to best understand their needs.
//        In the process, we used personas to simulate potential users’ interaction with our prototype.
//         The goal was to create a highly functional application, written in clean, maintainable code.
//          We met this goal, creating an application optimized to suit the user’s needs best.`,
//       sectionOneBodySP: "",
//       sectionOneImage: "",
//       sectionTwoTitle: "Design",
//       sectionTwoBodyFP: `Our goal was ease of use, and fast navigation between the features in our app.
//        To facilitate this goal, we made use of a selection of design patterns, such as bottom navigation,
//         favorites, or cards. This ensured users would quickly adapt to the interface and understand it from the get-go.
//          As the lead designer I was in charge of overseeing the ideation process and creating the mockups.
//           The visual design had to be consistent with the diabetes.dk website.`,
//       sectionTwoBodySP: "",
//       sectionTwoImage: "",
//       sectionThreeTitle: "JavaScript coding",
//       sectionThreeBodyFP: `The app had to be implemented as a single-page application, utilizing plain JavaScript
//        to toggle different elements. As the main JavaScript programmer, I created a functional
//         favorites system for the recipes section. The favorites section was dynamically rendered,
//          based on which recipes the user has marked as favorites. I also implemented a shopping list,
//           that would be saved in the browser’s local storage even after the user has closed the app.`,
//       sectionThreeBodySP: "",
//       sectionThreeImage: "",
//     },
//     {
//       projectPath: "ccw",
//       name: "CCW - Central Car Wash",
//       technologies: ["HTML", "SCSS", "Bootstrap", "JavaScript"],
//       roles: ["Main HTML & CSS developer", "Main JavaScript developer"],
//       subtitle: "Responsive website and webshop",
//       displayImage: "",
//       longDescriptionFP: `CWW is a car wash company, specializing in hand-wash services.
//        The company was looking for an opportunity to modernize their current website and improve its usability.`,
//       longDescriptionSP: `We helped CCW by developing a scalable UI system, and creating a codebase that is elegant and easily
//        adaptable for future developers, along with a functional prototype of the revamped website and webshop.`,
//       linkGithub: "https://github.com/joanna-00/ccw-website/tree/version2",
//       linkLive:
//         "http://des-iis.ucn.dk/mmdi0919/1081578/sem2/mmd2/version2/index.html",
//       sectionOneTitle: "Process summary",
//       sectionOneBodyFP: `The process’s core was redesigning the current website, which meant we needed to get a
//        good understanding of the users. We relied on data gathered from interviews, as well as established best
//         pracices to make sure the solution would be a discernible improvement over the previous version.`,
//       sectionOneBodySP: `We worked with modern tools such as SCSS and Bootstrap to maximize the efficiency
//        of our coding workflows, and make the solution easy to pass along to any future developers.`,
//       sectionOneImage: "",
//       sectionTwoTitle: "Design",
//       sectionTwoBodyFP: `The team’s designer created a UI kit using Adobe XD, which I later translated into code, using SCSS
//        as a language to create modular codeblocks, and BEM as the naming convention for CSS classes,
//         since it goes hand-in-hand with SCSS’s ideology.`,
//       sectionTwoBodySP: `By combining these tools we managed to create a reliable, scalable structure
//        for all of our CSS. Additionally, in order to optimize our workflow with the responsiveness,
//         we used Bootstrap’s 12-column grid system as the foundation for the new layouts.`,
//       sectionTwoImage: "",
//       sectionThreeTitle: `Webshop and JavaScript`,
//       sectionThreeBodyFP: `An important section of the website was the webshop part, allowing customers
//        to book services ahead of time, with virtually no direct contact with the company’s employees.`,
//       sectionThreeBodySP: `Our solution included WordPress, used as a headless CMS to store shop data.
//        I used JavaScript to make the right requests to WordPress and fetch content and properly redirect
//         to sub-pages. I also made use of browser local storage to simulate adding to cart, together
//          with the booking process. The latter also included a lot of custom validation for UI elements
//           like dropdowns and a functional calendar.`,
//       sectionThreeImage: "",
//     },
//   ],
// };

const Projects = (props) => {
  const data = useContext(ProjectsContext);
  const projects = data.projects.reverse();

  return (
    <Layout>
      {console.log(data)}
      {projects.map((project, index) => {
        if (index % 2 == 0) {
          return (
            <ProjectSection
              key={index}
              project={project}
              alignment="left"
            ></ProjectSection>
          );
        } else {
          return (
            <ProjectSection
              key={index}
              project={project}
              alignment="right"
            ></ProjectSection>
          );
        }
      })}
    </Layout>
  );
};

export default Projects;
