import React from "react";

import "./main.css";
import AboutMe from "../AboutMe/AboutMe";

const Main = () => {
  const name = "Ali";
  const myLove = "UMT";
  return (
    <>
      <AboutMe name={name} love={myLove} />
    </>
  );
};

export default Main;
