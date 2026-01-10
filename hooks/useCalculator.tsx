import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>(undefined);

  useEffect(() => {
    //TODO: calcular subresultado
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {
    console.log({ numberString });

    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      if (numberString === "0" && !number.includes(".")) {
        return;
      }
      setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  return {
    formula,
    number,
    prevNumber,

    //methods
    buildNumber,
  };
};
