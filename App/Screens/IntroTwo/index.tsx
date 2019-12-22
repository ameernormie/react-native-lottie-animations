import React from "react";
import { Intro } from "../../Components";

const animation = require("../../Animations/archer.json");

const IntroTwo = () => (
  <Intro sourceOfAnimation={animation} title="Title Two" body="Lorem Ipsum" />
);

export default IntroTwo;
