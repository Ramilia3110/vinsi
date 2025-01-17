import React from "react";
import s from "./Marquee.module.scss";

const Marquee = () => {
  return (
    <div className={s["marquee-wrapper"]}>
      <h1 className={s.marquee}>
        <strong>New season, New skills!</strong> 😀
      </h1>
      <h1 className={s.marquee}>All Courses at $9.99</h1>
      <h1 className={s.marquee}>
        <strong>New season, New skills!</strong> 😀
      </h1>
      <h1 className={s.marquee}>All Courses at $9.99</h1>
      <h1 className={s.marquee}>
        <strong>New season, New skills!</strong> 😀
      </h1>
      <h1 className={s.marquee}>All Courses at $9.99</h1>
      <h1 className={s.marquee}>
        <strong>New season, New skills!</strong> 😀
      </h1>
      <h1 className={s.marquee}>All Courses at $9.99</h1>
    </div>
  );
};

export default Marquee;
