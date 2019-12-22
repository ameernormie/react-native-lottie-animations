import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import { IntroOne, IntroTwo, IntroThree } from "../../Screens";
import { options } from "./options";

const AppIntroTab = createMaterialTopTabNavigator(
  { IntroOne, IntroTwo, IntroThree },
  options
);

export default AppIntroTab;
