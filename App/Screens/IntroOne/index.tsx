import React from "react";
import { Intro } from "../../Components";

const animation = require("../../Animations/nointernet.json");

const IntroOne = () => (
  <Intro sourceOfAnimation={animation} title="Title One" body="Lorem Ipsum" />
);

export default IntroOne;
