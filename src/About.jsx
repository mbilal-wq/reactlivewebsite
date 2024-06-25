import React from "react";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc="/images/hero2.jpeg"
        visit="/contact"
        imgstyle={{ width: "510px" }}
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
