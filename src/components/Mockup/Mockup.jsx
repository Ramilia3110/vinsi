import React, { useEffect, useRef } from "react";
import s from "./Mockup.module.scss";

const Mockup = ({ img }) => {
  return (
    <div className={s.iphone}>
      <div className={s.notch}></div>
      <div className={s.screen}>
        <img src={img} alt="Mobile Design" />
      </div>
    </div>
  );
};

export default Mockup;
