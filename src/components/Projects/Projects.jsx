import React from "react";
import s from "./Projects.module.scss";
import Card from "./Card/Card";
import screenshot from "./../../assets/s.png";

const Projects = () => {
  return (
    <div className={s.projects}>
      <h5>Elements</h5>
      <h3>Keep the focus in these elements.</h3>
      <div className={s.cards}>
        <Card text1="Desktop" text2="Desktop thumbnail" img={screenshot} />
        <Card text1="Desktop" text2="Desktop thumbnail" img={screenshot} />
        <Card text1="Desktop" text2="Desktop thumbnail" img={screenshot} />
        <Card text1="Desktop" text2="Desktop thumbnail" img={screenshot} />
      </div>
    </div>
  );
};

export default Projects;
