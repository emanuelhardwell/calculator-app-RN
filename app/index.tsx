import { CalculatorButton } from "@/components/CalculatorButton";
import { TextCustom } from "@/components/TextCustom";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View>
        <TextCustom variant="h1">10 x 1,000,000,000</TextCustom>
        <TextCustom variant="h2">1,000,000,000</TextCustom>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          textBlack
          color={Colors.lightGray}
          onPress={() => {}}
        ></CalculatorButton>
        <CalculatorButton
          label="+/-"
          textBlack
          color={Colors.lightGray}
          onPress={() => {}}
        ></CalculatorButton>
        <CalculatorButton
          label="del"
          textBlack
          color={Colors.lightGray}
          onPress={() => {}}
        ></CalculatorButton>
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => {}}
        ></CalculatorButton>
      </View>
    </View>
  );
};

export default CalculatorApp;
