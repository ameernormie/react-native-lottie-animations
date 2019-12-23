import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const LottieViewStyled = styled(LottieView)`
  width: 200px;
  height: 250px;
`;

export const ContainerStyled = styled.SafeAreaView`
  flex: 1;
  align-self: center;
  width: 100%;
  background-color: #7fecfa;
`;

export const AnimationViewStyled = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
  height: 300px;
`;

export const DescriptionViewStyled = styled.View`
  flex: 1;
  justify-content: center;
  padding-bottom: 32px;
  padding-left: 32px;
  padding-right: 32px;
`;

export const IntroTitleStyled = styled.Text`
  font-size: 24px;
  text-align: center;
  padding: 16px;
  line-height: 30;
  color: #393c50;
`;

export const IntroTextStyled = styled.Text`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding-top: 32px;
  line-height: 26;
  color: #636363;
`;
