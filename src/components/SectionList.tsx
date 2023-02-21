import React from "react";
import {
  type UseFieldArrayRemove,
  type FieldErrors,
  type UseFormRegister,
  type Control,
  type FieldArrayWithId,
  type UseFieldArrayAppend,
} from "react-hook-form";
import { type FormValues } from "../App";
import Section from "./Section";
import Total from "./Total";

interface SectionListProps {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues, any>;
  errors: FieldErrors<FormValues>;
  fields: Array<FieldArrayWithId<FormValues, "cart", "id">>;
  append: UseFieldArrayAppend<FormValues, "cart">;
  remove: UseFieldArrayRemove;
}

const SectionList = ({
  register,
  control,
  errors,
  fields,
  append,
  remove,
}: SectionListProps): JSX.Element => {
  return (
    <>
      {fields.map((field, index) => {
        return (
          <Section
            key={index}
            register={register}
            errors={errors}
            field={field}
            index={index}
            remove={remove}
          />
        );
      })}

      <Total control={control} />

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
