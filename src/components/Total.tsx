import React from "react";
import { type Control, useWatch } from "react-hook-form";
import { type FormValues } from "../App";

const Total = ({ control }: { control: Control<FormValues> }): JSX.Element => {
  const formValues = useWatch({
    name: "cart",
    control,
  });
  const total = formValues.reduce(
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
    0
  );
  return <p>Total Amount: {total}</p>;
};

export default Total;
