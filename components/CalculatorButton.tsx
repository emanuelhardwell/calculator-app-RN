import { Colors } from "@/constants/Colors";
import { Pressable, Text } from "react-native";
import { globalStyles } from "../styles/global-styles";

interface CalculatorButtonProps {
  label: string;
  onPress: () => void;
  textBlack?: boolean;
  color?: string;
}

export const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  textBlack = false,
  onPress,
}: CalculatorButtonProps) => {
  return (
    <Pressable
      style={{ ...globalStyles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Text
        style={[
          globalStyles.buttonText,
          { color: textBlack ? "dark" : "white" },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};
