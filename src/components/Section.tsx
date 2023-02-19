import React from "react";
import {
  type FieldArrayWithId,
  type FieldErrors,
  type UseFieldArrayRemove,
  type UseFormRegister,
} from "react-hook-form";
import { type FormValues } from "../App";

interface SectionProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  field: FieldArrayWithId<FormValues, "cart", "id">;
  index: number;
  remove: UseFieldArrayRemove;
}

const Section = ({
  register,
  errors,
  field,
  index,
  remove,
}: SectionProps): JSX.Element => {
  return (
    <div key={field.id}>
      <section className={"section"} key={field.id}>
        <input
          placeholder="name"
          {...register(`cart.${index}.name` as const, {
            required: true,
          })}
          className={errors?.cart?.[index]?.name != null ? "error" : ""}
        />
        <input
          placeholder="quantity"
          type="number"
          {...register(`cart.${index}.quantity` as const, {
            valueAsNumber: true,
            required: true,
          })}
          className={errors?.cart?.[index]?.quantity != null ? "error" : ""}
        />
        <input
          placeholder="value"
          type="number"
          {...register(`cart.${index}.price` as const, {
            valueAsNumber: true,
            required: true,
          })}
          className={errors?.cart?.[index]?.price != null ? "error" : ""}
        />
        <button
          type="button"
          onClick={() => {
            remove(index);
          }}
        >
          DELETE
        </button>
      </section>
    </div>
  );
};

export default Section;
