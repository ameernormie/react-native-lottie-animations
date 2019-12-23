import React from "react";
import LottieView from "lottie-react-native";
import {
  AnimationView,
  Container,
  IntroText,
  IntroTitle,
  DescriptionView
} from "./styledComponent";

const Intro = ({ sourceOfAnimation, title, body }) => (
  <Container>
    <AnimationView>
      <LottieView
        source={sourceOfAnimation}
        autoPlay
        style={{ width: 200, height: 250 }}
        resizeMode="cover"
      />
    </AnimationView>
    <DescriptionView>
      <IntroTitle>{title}</IntroTitle>
      <IntroText>{body}</IntroText>
    </DescriptionView>
  </Container>
);

export default Intro;
