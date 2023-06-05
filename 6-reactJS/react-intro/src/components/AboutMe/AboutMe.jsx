import React from "react";

const AboutMe = (prop) => {
  //   console.log(prop.name);
  //   const name = prop.name;
  //   const love = prop.love;
  const { name, love } = prop;
  return (
    <>
      <p>My Name is {name}</p>
      <p>I Love {love}</p>
    </>
  );
};

export default AboutMe;
