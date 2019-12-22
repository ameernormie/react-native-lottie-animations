import React from "react";
import { Intro } from "../../Components";

const animation = require("../../Animations/snowflakeloader.json");

const IntroThree = () => (
  <Intro sourceOfAnimation={animation} title="Title Three" body="Lorem Ipsum" />
);

export default IntroThree;
