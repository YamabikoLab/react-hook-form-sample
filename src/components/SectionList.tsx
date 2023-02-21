import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { type FormValues } from "../App";
import Section from "./Section";
import Total from "./Total";

const SectionList = (): JSX.Element => {
  const { control } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
  });
  return (
    <>
      {fields.map((field, index) => {
        return (
          <Section key={index} field={field} index={index} remove={remove} />
        );
      })}

      <Total />

      <button
        type="button"
        onClick={() => {
          append({
            name: "",
            quantity: 0,
            price: 0,
          });
        }}
      >
        追加
      </button>
    </>
  );
};

export default SectionList;
