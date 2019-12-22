import React from "react";
import { IntroFooter } from "../../Components";

const footer = () => <IntroFooter />;

export const options = {
  initialRouteName: "IntroOne",
  tabBarPosition: "bottom",
  swipeEnabled: true,
  animationEnabled: true,
  tabBarComponent: footer
};
