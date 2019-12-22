import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const IntroOne = () => (
  <View style={styles.container}>
    <Text>IntroOne</Text>
  </View>
);

export default IntroOne;
