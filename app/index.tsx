import { CalculatorButton } from "@/components/CalculatorButton";
import { TextCustom } from "@/components/TextCustom";
import { Colors } from "@/constants/Colors";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  const { formula, buildNumber, clean, toogleSign, deleteLast } =
    useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View>
        <TextCustom variant="h1">{formula}</TextCustom>
        <TextCustom variant="h2">1,000,000,000</TextCustom>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          textBlack
          color={Colors.lightGray}
          onPress={clean}
        ></CalculatorButton>
        <CalculatorButton
          label="+/-"
          textBlack
          color={Colors.lightGray}
          onPress={toogleSign}
        ></CalculatorButton>
        <CalculatorButton
          label="del"
          textBlack
          color={Colors.lightGray}
          onPress={deleteLast}
        ></CalculatorButton>
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={() => {}}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          onPress={() => buildNumber("7")}
        ></CalculatorButton>
        <CalculatorButton
          label="8"
          onPress={() => buildNumber("8")}
        ></CalculatorButton>
        <CalculatorButton
          label="9"
          onPress={() => buildNumber("9")}
        ></CalculatorButton>
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => {}}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          onPress={() => buildNumber("4")}
        ></CalculatorButton>
        <CalculatorButton
          label="5"
          onPress={() => buildNumber("5")}
        ></CalculatorButton>
        <CalculatorButton
          label="6"
          onPress={() => buildNumber("6")}
        ></CalculatorButton>
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => {}}
        ></CalculatorButton>
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onPress={() => buildNumber("1")}
        ></CalculatorButton>
        <CalculatorButton
          label="2"
          onPress={() => buildNumber("2")}
        ></CalculatorButton>
        <CalculatorButton
          label="3"
          onPress={() => buildNumber("3")}
        ></CalculatorButton>
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
          onPress={() => buildNumber("0")}
        ></CalculatorButton>
        <CalculatorButton
          label="."
          onPress={() => buildNumber(".")}
        ></CalculatorButton>
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
