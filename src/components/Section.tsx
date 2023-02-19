import React from "react";
import {
  useFormContext,
  type FieldArrayWithId,
  type UseFieldArrayRemove,
} from "react-hook-form";
import { type FormValues } from "../App";

interface SectionProps {
  field: FieldArrayWithId<FormValues, "cart", "id">;
  index: number;
  remove: UseFieldArrayRemove;
}

const Section = ({ field, index, remove }: SectionProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
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
