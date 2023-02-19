/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import SectionList from "./components/SectionList";

export interface FormValues {
  cart: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
}

export default function App(): JSX.Element {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: "test", quantity: 1, price: 23 }],
    },
    mode: "onBlur",
  });
  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
  });
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSubmit = (data: FormValues) => { console.log(data); };

  return (
    <>
      <div>
        <h1>Componentize App</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SectionList
            register={register}
            control={control}
            errors={errors}
            fields={fields}
            append={append}
            remove={remove}
          />

          <input type="submit" />
        </form>
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
}
