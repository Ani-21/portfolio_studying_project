import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/digital.jpg";
import IMG2 from "../../assets/digital.jpg";
import IMG3 from "../../assets/digital.jpg";
import IMG4 from "../../assets/digital.jpg";
import IMG5 from "../../assets/digital.jpg";
import IMG6 from "../../assets/digital.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Project 3",
    github: "https://github.com",
    demo: "",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Project 4",
  //   github: "https://github.com",
  //   demo: "",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Project 5",
  //   github: "https://github.com",
  //   demo: "",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Project 6",
  //   github: "https://github.com",
  //   demo: "",
  // },
];

const Portfolio = () => {
  const listProjects = data.map(({ id, image, title, github, demo }) => (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github} className="btn" target="_blank">
          GitHub
        </a>
        <a href={demo} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  ));
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">{listProjects}</div>
    </section>
  );
};

export default Portfolio;
