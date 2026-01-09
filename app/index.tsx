import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        style={globalStyles.mainResult}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        10 x 1,000,000,000
      </Text>
      <Text
        style={globalStyles.subResult}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        1,000,000,000
      </Text>
    </View>
  );
};

export default CalculatorApp;
