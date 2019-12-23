/* eslint-disable react/prop-types */
import React from "react";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import {
  ContainerStyled,
  TrackerStyled,
  CircleStyled
} from "./introfooter.style";
import Icon from "../Icon";

const IntroFooter = ({ navigation }) => {
  const indexOfCurrentScreen = navigation.state.index;
  const nameOfScreen = index => navigation.state.routes[index].routeName;
  const nameOfNextScreen = () =>
    indexOfCurrentScreen !== 2
      ? navigation.navigate(nameOfScreen(indexOfCurrentScreen + 1))
      : navigation.navigate("Home");
  const trackerColor = indexOfComp => indexOfCurrentScreen === indexOfComp;
  return (
    <ContainerStyled>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon iconName="home" />
      </TouchableOpacity>
      <TrackerStyled>
        {[0, 1, 2].map(indexOfComp => (
          <CircleStyled key={indexOfComp} color={trackerColor(indexOfComp)} />
        ))}
      </TrackerStyled>
      <TouchableOpacity onPress={nameOfNextScreen}>
        <Icon iconName={indexOfCurrentScreen === 2 ? "check" : "arrowright"} />
      </TouchableOpacity>
    </ContainerStyled>
  );
};
export default withNavigation(IntroFooter);
