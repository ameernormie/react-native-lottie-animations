import { createStackNavigator } from "react-navigation-stack";
import AppIntroTab from "../AppIntro";
import { Home } from "../../Screens";

const RootStack = createStackNavigator(
  { AppIntroTab, Home },
  { headerMode: "none" }
);

export default RootStack;
