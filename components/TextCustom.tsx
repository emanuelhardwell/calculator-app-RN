import { globalStyles } from "@/styles/global-styles";
import { Text, TextProps } from "react-native";

interface TextCustomProps extends TextProps {
  variant?: "h1" | "h2";
}
export const TextCustom = ({
  children,
  variant = "h1",
  ...rest
}: TextCustomProps) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  );
};
