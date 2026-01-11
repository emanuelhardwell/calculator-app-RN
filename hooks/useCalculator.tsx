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
    const result = calculateSubResult();
    setPrevNumber(result.toString());
  }, [formula]);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  const calculateSubResult = () => {
    const [value1, operator, value2] = formula.split(" ");

    const number1 = Number(value1);
    const number2 = Number(value2);

    if (isNaN(number2)) return number1;

    switch (operator) {
      case Operator.add:
        return number1 + number2;
      case Operator.subtract:
        return number1 - number2;
      case Operator.multiply:
        return number1 * number2;
      case Operator.divide:
        return number1 / number2;

      default:
        throw new Error(`Operator ${operator} not valid`);
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());
    setPrevNumber("0");
    lastOperation.current = undefined;
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith(".")) {
      return setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber("0");
  };

  const operationAdd = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };
  const operationSubtract = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };
  const operationMultiply = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const operationDivide = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const clean = () => {
    setFormula("0");
    setNumber("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
  };

  const toogleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }

    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }
    setNumber("0");
  };

  const buildNumber = (numberString: string) => {
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
    clean,
    toogleSign,
    deleteLast,
    operationAdd,
    operationSubtract,
    operationMultiply,
    operationDivide,
    calculateResult,
  };
};
