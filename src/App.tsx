/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
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
  const methods = useForm<FormValues>({
    defaultValues: {
      cart: [{ name: "test", quantity: 1, price: 23 }],
    },
    mode: "onBlur",
  });
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <h1>useFormContext App</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <SectionList />

            <input type="submit" />
          </form>
        </FormProvider>
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
}
