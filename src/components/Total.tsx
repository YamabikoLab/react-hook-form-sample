import React from "react";
import { useWatch, useFormContext } from "react-hook-form";
import { type FormValues } from "../App";

const Total = (): JSX.Element => {
  const { control } = useFormContext<FormValues>();
  const formValues = useWatch({
    name: "cart",
    control,
  });
  const total = formValues.reduce(
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
    0
  );
  return <p>合計: {total}</p>;
};

export default Total;
