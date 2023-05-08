import waveProject from "../.././public/images/waveProject.png";
import shopProject from "../.././public/images/fashion.png";
import adsProject from "../.././public/images/adsProject.png";
import foodProject from "../.././public/images/foodProject.png";
import travelProject from "../.././public/images/travelProject.png";

export const skills = [
  {
    name: "CSS",
    url: "/../public/images/css.png",
  },
  {
    name: "JavaScript",
    url: "../.././public/images/js.png",
  },
  {
    name: "Bootstrap",
    url: "/../public/images/bootstrap.png",
  },
  {
    name: "React",
    url: "/../public/images/react.png",
  },
  {
    name: "React Redux",
    url: "/../public/images/redux.png",
  },
  {
    name: "Mongo DB",
    url: "/../public/images/mongo.png",
  },
  {
    name: "NodeJS",
    url: "/../public/images/node.png",
  },
  {
    name: "Github",
    url: "/../public/images/git.png",
  },
  {
    name: "TypeScript",
    url: "/../public/images/typescript.png",
  },
  {
    name: "Tailwind",
    url: "/../public/images/tailwind.png",
  },
  {
    name: "MySQL",
    url: "/../public/images/mysql.png",
  },
];

export const Projects = [
  {
    name: "Fashon Shop e-commerce",
    data: "March 2023",
    description:
      "Online store with clothing products along with shopping cart functionality and full order shipping. Registration and login capabilities have been added to the store.",
    src: shopProject,
    alt: "main page project",
    url: "https://fashion-e-commerce.onrender.com/",
    git: "https://github.com/Pawelsmolarski95/Fashion-Shop-Fullstack",
    tech: ["NestJS", "Prisma", "MySql", "React", "Tailwind CSS"],
  },
  {
    name: "YourAds ",
    data: "February 2023",
    description:
      "YouAds is an fullstack application in which you can manage your ads. It supports registration and login. Users who are logged in can view, add, edit and delete their ads.",
    src: adsProject,
    alt: "main page project",
    url: "https://adspage-fullstack-app.pawelsmolarski9.repl.co/",
    git: "https://github.com/Pawelsmolarski95/AdsPage-fullstack-app",
    tech: [
      "React",
      "Redux",
      "Thunk",
      "React-Bootstrap",
      "Node",
      "Express",
      "MongoDB",
    ],
  },
  {
    name: "New Wave Festival",
    data: "January 2023",
    description:
      "A site where you can book a ticket for a concert of your choice, along with support for a purchase form. We communicate with the server using WebSocket, where we know in real time which seat is free.",
    src: waveProject,
    alt: "main page project",
    url: "https://restapi.pawelsmolarski9.repl.co/",
    git: "https://github.com/Pawelsmolarski95/REST_API",
    tech: ["React", "Redux", "Router", "Thunk", "Sass", "Node", "ExpressJS", "WebSocket"],
  },
  {
    name: "Travel Blog",
    data: "September 2022",
    description:
      "Travel blog is an application in which you can add thistles about your recent travels. The site also provides the ability to edit and delete content.",
    src: travelProject,
    alt: "main page project",
    url: "https://github.com/Pawelsmolarski95/TravelBook",
    git: "https://github.com/Pawelsmolarski95/REST_API",
    tech: ["React", "Redux", "Router", "Sass"],
  },

  {
    name: "FoodApp ",
    data: "July 2022",
    description:
      "FoodApp is an application with which you can find a recipe for your favorite dish by typing in a single product.",
    src: foodProject,
    alt: "main page project",
    url: "https://yourfoodsapp.netlify.app",
    git: "https://github.com/Pawelsmolarski95/Food-Recipe-App",
    tech: ["JavaScript", "Sass"],
  },
];
