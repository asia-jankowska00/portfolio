import React, { createContext } from "react";

const data = {
  projects: [
    {
      projectPath: "camperr",
      name: "Camperr",
      homepageDisplay: true,
      technologies: [
        "React",
        "Redux",
        "styled-components",
        "MongoDB",
        "mongoose",
        "Express",
        "Node",
        "Figma",
      ],
      roles: ["Main designer", "Main developer"],
      subtitle: "Full stack MERN application",
      displayImage: "camperr/mockup.png",
      longDescriptionFP: `Camperr is a social media app, build from the ground up using the MERN stack. The project was realized as an alternative take on Colt Steele’s Web Developer Bootcamp’s final project.`,
      longDescriptionSP: `Among its core features are a custom built REST API, authentication and authorization, image upload, faceted browsing, geocoding with Google Maps and many more.`,
      linkGithub: "https://github.com/asia-jankowska00/camperr",
      linkLive: "https://camperr.herokuapp.com/",
      sectionOneTitle: "Process Summary",
      sectionOneBodyFP: `I wanted to create an application that would have great usability on the client side and be structured in a scalable and performant way on the back end.`,
      sectionOneBodySP: `I settled on using the MERN stack due to its popularity in the industry and the ease of use it offers to the developer.`,
      sectionOneImage: "camperr/stack.png",
      sectionTwoTitle: "Design",
      sectionTwoBodyFP: `I’ve used Figma to create a mockup of the application. I was aiming for a unique, modern feel, so I opted out of using any CSS libraries. The mockup served as a guide for the components I would later create in React.`,
      sectionTwoBodySP: `I used styled-components to translate the mockup into code. This allowed me to create components with encapsulated styles, while at the same time maintaining general consistency by using a theme object provided by the Context API.`,
      sectionTwoImage: "camperr/design-stack.png",
      sectionThreeTitle: "The MERN stack",
      sectionThreeBodyFP: `I’ve used React Redux on the frontend to manage state and fetch data from the backend. This was achieved by creating a REST API connected to the Mongo database and creating Redux actions with axios that would send requests when a user interacts with the frontend.`,
      sectionThreeBodySP: `The resulting app was deployed using Heroku.`,
      sectionThreeImage: "camperr/code.png",
    },
    {
      projectPath: "ccw",
      name: "CCW - Central Car Wash",
      homepageDisplay: true,
      technologies: ["HTML", "SCSS", "Bootstrap", "JavaScript"],
      roles: ["Main HTML & CSS developer", "Main JavaScript developer"],
      subtitle: "Responsive website and webshop",
      displayImage: "ccw/combined.png",
      longDescriptionFP: `CWW is a car wash company, specializing in hand-wash services.
       The company was looking for an opportunity to modernize their current website and improve its usability.`,
      longDescriptionSP: `We helped CCW by developing a scalable UI system, and creating a codebase that is elegant and easily
       adaptable for future developers, along with a functional prototype of the revamped website and webshop.`,
      linkGithub: "https://github.com/joanna-00/ccw-website/tree/version2",
      linkLive:
        "http://des-iis.ucn.dk/mmdi0919/1081578/sem2/mmd2/version2/index.html",
      sectionOneTitle: "Process summary",
      sectionOneBodyFP: `The process’s core was redesigning the current website, which meant we needed to get a
       good understanding of the users. We relied on data gathered from interviews, as well as established best
        pracices to make sure the solution would be a discernible improvement over the previous version.`,
      sectionOneBodySP: `We worked with modern tools such as SCSS and Bootstrap to maximize the efficiency
       of our coding workflows, and make the solution easy to pass along to any future developers.`,
      sectionOneImage: "ccw/mobile-steps.png",
      sectionTwoTitle: "Design",
      sectionTwoBodyFP: `The team’s designer created a UI kit using Adobe XD, which I later translated into code, using SCSS
       as a language to create modular codeblocks, and BEM as the naming convention for CSS classes,
        since it goes hand-in-hand with SCSS’s ideology.`,
      sectionTwoBodySP: `By combining these tools we managed to create a reliable, scalable structure
       for all of our CSS. Additionally, in order to optimize our workflow with the responsiveness,
        we used Bootstrap’s 12-column grid system as the foundation for the new layouts.`,
      sectionTwoImage: "ccw/ui-kit-2.png",
      sectionThreeTitle: `Webshop and JavaScript`,
      sectionThreeBodyFP: `An important section of the website was the webshop part, allowing customers
       to book services ahead of time, with virtually no direct contact with the company’s employees.`,
      sectionThreeBodySP: `Our solution included WordPress, used as a headless CMS to store shop data.
       I used JavaScript to make the right requests to WordPress and fetch content and properly redirect
        to sub-pages. I also made use of browser local storage to simulate adding to cart, together
         with the booking process. The latter also included a lot of custom validation for UI elements
          like dropdowns and a functional calendar.`,
      sectionThreeImage: "ccw/shop-checkout.png",
    },
    {
      projectPath: "diabetes-dk",
      name: "Diabetes.dk",
      homepageDisplay: true,
      technologies: ["HTML", "CSS", "JavaScript"],
      roles: ["Project manager", "Designer", "Main JavaScript developer"],
      subtitle: "Mobile single-page web app",
      displayImage: "diabetes/diabetes-presentation-mockup.png",
      longDescriptionFP: `Diabetes Association is an organization for helping diabetics in their daily lives.
       As part of fulfilling this goal, they have issued a ‘shopping guide’ - a guide for choosing foods
        that are suitable for diabetics when grocery shopping. The task was to digitize the shopping guide by creating a mobile application.`,
      longDescriptionSP: "",
      linkGithub: "https://github.com/joanna-00/DiabetesWebApp",
      linkLive:
        "http://des-iis.ucn.dk/mmdi0919/1081581/sem2/theme1/diabetes_app/",
      sectionOneTitle: "Process summary",
      sectionOneBodyFP: `We worked with a range of user research methods in order to best understand their needs.
       In the process, we used personas to simulate potential users’ interaction with our prototype.
        The goal was to create a highly functional application, written in clean, maintainable code.
         We met this goal, creating an application optimized to suit the user’s needs best.`,
      sectionOneBodySP: "",
      sectionOneImage: "diabetes/diabetes-bunch.png",
      sectionTwoTitle: "Design",
      sectionTwoBodyFP: `Our goal was ease of use, and fast navigation between the features in our app.
       To facilitate this goal, we made use of a selection of design patterns, such as bottom navigation,
        favorites, or cards. This ensured users would quickly adapt to the interface and understand it from the get-go.
         As the lead designer I was in charge of overseeing the ideation process and creating the mockups.
          The visual design had to be consistent with the diabetes.dk website.`,
      sectionTwoBodySP: "",
      sectionTwoImage: "diabetes/diabetes-mockup.png",
      sectionThreeTitle: "JavaScript coding",
      sectionThreeBodyFP: `The app had to be implemented as a single-page application, utilizing plain JavaScript
       to toggle different elements. As the main JavaScript programmer, I created a functional
        favorites system for the recipes section. The favorites section was dynamically rendered,
         based on which recipes the user has marked as favorites. I also implemented a shopping list,
          that would be saved in the browser’s local storage even after the user has closed the app.`,
      sectionThreeBodySP: "",
      sectionThreeImage: "diabetes/diabetes-favorites-m2.png",
    },
    {
      projectPath: "it-just-forks",
      name: "It just forks",
      homepageDisplay: false,
      technologies: ["React", "react-router", "TailwindCSS"],
      roles: ["Main designer", "Main developer"],
      subtitle: "React application",
      displayImage: "it-just-forks/it-just-forks-all-devices.png",
      longDescriptionFP: `The aim of the project was the exploration of the most modern features of React,
       along with strengthening my skills in ES6 Javascript and handling asynchronous code with promises and async/await.`,
      longDescriptionSP: "",
      linkGithub: "https://github.com/asia-jankowska00/react-recipe-app",
      linkLive: "https://asia-jankowska00.github.io/react-recipe-app/",
      sectionOneTitle: "React",
      sectionOneBodyFP: `The project was realized using the React framework. In the code structure, I utilized a range
       of modern features, including functional components and hooks. I used the react router to navigate between
        different parts of the app.`,
      sectionOneBodySP: "",
      sectionOneImage: "it-just-forks/it-just-forks-32.png",
      sectionTwoTitle: "Tailwind",
      sectionTwoBodyFP: `The visual side of the project was achieved with the use of Tailwind CSS. I find it’s
       utility-based system to be very flexible and convenient to use. I used Tailwind’s responsiveness model
        to create an app that would scale to any device.`,
      sectionTwoBodySP: "",
      sectionTwoImage: "it-just-forks/it-just-forks-m.png",
      sectionThreeTitle: "",
      sectionThreeBodyFP: "",
      sectionThreeBodySP: "",
      sectionThreeImage: "",
    },
    {
      projectPath: "svalegaarden-mest",
      homepageDisplay: false,
      name: "Svalegaarden Mest",
      technologies: ["HTML", "CSS", "JavaScript"],
      roles: ["Main designer", "CSS animator", "JavaScript developer"],
      subtitle: "Responsive website",
      displayImage: "svalegaarden/svalegaarden-all-devices.png",
      longDescriptionFP: `Svalegaarden Mest is function room company that emphasizes memorability and
       atmosphere as some of the core values for the experiences they want to provide to their customers.
        The aim of the project was to separate the part of the website aimed at private customers, while
         complying with the brand guidelines and optimizing the Information Architecture.`,
      longDescriptionSP: "",
      linkGithub: "https://github.com/joanna-00/svalegaarden-mest",
      linkLive:
        "http://des-iis.ucn.dk/mmdi0919/1081578/sem1/mmd1/svalegaarden-mest/",
      sectionOneTitle: "Process summary",
      sectionOneBodyFP: `Since our solution wasn’t going to be made from scratch, but rather a revamp
       of the old website, we needed to get a good understanding of content. We created a content
        inventory and later used affinity diagrams to create a robust information architecture for the new site.`,
      sectionOneBodySP: `User testing played a large part in the process. We carried out several user tests,
       which resulted in valuable feedback in how to further improve the project. The final product respected
        the users preferences and mental models, resulting in a good overall experience.`,
      sectionOneImage: "svalegaarden/svalegaarden-bunch.png",
      sectionTwoTitle: "Design",
      sectionTwoBodyFP: `I was in charge of coming up with the design of the site. We were given a design brief
       that we had to follow, including typefaces and color scheme. The design had to follow the client brief
        guidelines, expressing the qualities of luxury, elegance and an overall modern feeling. In order to
         facilitate those requirements, I created a high fidelity mockup using Adobe XD, and later assisted in implementing it with code.`,
      sectionTwoBodySP: "",
      sectionTwoImage: "svalegaarden/svalegaarden-mockup.jpg",
      sectionThreeTitle: "JavaScript & CSS animations",
      sectionThreeBodyFP: `In addition to coding interactions with JavaScript, I created fade-in animations that appear
       as the user scrolls along the page. On top of that I took care of animating small parts of the interface that
        needed it the most, like drop-downs and menus.`,
      sectionThreeBodySP: "",
      sectionThreeImage: "svalegaarden/svalgegaarden-animation.gif",
    },
  ],
};

// const projectModel = {
//   name: "",
//   technologies: [],
//   roles: [],
//   subtitle: "p",
//   longDescriptionFP: "",
//   longDescriptionSP: "",
//   linkGithub: "",
//   linkLive: "",
//   sectionOneTitle: "",
//   sectionOneBodyFP: "",
//   sectionOneBodySP: "",
//   sectionOneImage: "",
//   sectionTwoTitle: "",
//   sectionTwoBodyFP: "",
//   sectionTwoBodySP: "",
//   sectionTwoImage: "",
//   sectionThreeTitle: "",
//   sectionThreeBodyFP: "",
//   sectionThreeBodySP: "",
//   sectionThreeImage: "",
// };

export const ProjectsContext = createContext();

const ProjectsContextProvider = (props) => {
  return (
    <ProjectsContext.Provider value={data}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
