import React from "react";
import {
  LottieViewStyled,
  AnimationViewStyled,
  ContainerStyled,
  IntroTextStyled,
  IntroTitleStyled,
  DescriptionViewStyled
} from "./intro.style";

const Intro = ({ sourceOfAnimation, title, body }) => (
  <ContainerStyled>
    <AnimationViewStyled>
      <LottieViewStyled
        source={sourceOfAnimation}
        autoPlay
        resizeMode="cover"
      />
    </AnimationViewStyled>
    <DescriptionViewStyled>
      <IntroTitleStyled>{title}</IntroTitleStyled>
      <IntroTextStyled>{body}</IntroTextStyled>
    </DescriptionViewStyled>
  </ContainerStyled>
);

export default Intro;
