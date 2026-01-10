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

      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => {}}></CalculatorButton>
        <CalculatorButton label="8" onPress={() => {}}></CalculatorButton>
        <CalculatorButton label="9" onPress={() => {}}></CalculatorButton>
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => {}}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => {}}></CalculatorButton>
        <CalculatorButton label="5" onPress={() => {}}></CalculatorButton>
        <CalculatorButton label="6" onPress={() => {}}></CalculatorButton>
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => {}}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => {}}></CalculatorButton>
        <CalculatorButton label="2" onPress={() => {}}></CalculatorButton>
        <CalculatorButton label="3" onPress={() => {}}></CalculatorButton>
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => {}}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          doubleSize
          label="0"
          onPress={() => {}}
        ></CalculatorButton>
        <CalculatorButton label="." onPress={() => {}}></CalculatorButton>
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => {}}
        ></CalculatorButton>
      </View>
    </View>
  );
};

export default CalculatorApp;
