import { TextCustom } from "@/components/TextCustom";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <TextCustom variant="h1">10 x 1,000,000,000</TextCustom>
      <TextCustom variant="h2">1,000,000,000</TextCustom>
    </View>
  );
};

export default CalculatorApp;
