import { Colors } from "@/constants/Colors";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";
import { globalStyles } from "../styles/global-styles";

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  textBlack?: boolean;
  color?: string;
  doubleSize?: boolean;
}

export const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  textBlack = false,
  doubleSize = false,
  onPress,
}: CalculatorButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.7 : 1,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: textBlack ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
