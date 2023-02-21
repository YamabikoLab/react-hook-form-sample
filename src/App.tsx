import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  cart: {
    name: string;
    price: number;
    quantity: number;
  }[];
};

const Total = ({ control }: { control: Control<FormValues> }) => {
  const formValues = useWatch({
    name: "cart",
    control,
  });
  const total = formValues.reduce(
    (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
    0
  );
  return <p>合計: {total}</p>;
};

export default function App() {
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
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <>
      <div>
        <h1>基本形</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => {
            return (
              <div key={field.id}>
                <section className={"section"} key={field.id}>
                  <input
                    placeholder="name"
                    {...register(`cart.${index}.name` as const, {
                      required: true,
                    })}
                    className={errors?.cart?.[index]?.name ? "error" : ""}
                  />
                  <input
                    placeholder="quantity"
                    type="number"
                    {...register(`cart.${index}.quantity` as const, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    className={errors?.cart?.[index]?.quantity ? "error" : ""}
                  />
                  <input
                    placeholder="value"
                    type="number"
                    {...register(`cart.${index}.price` as const, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    className={errors?.cart?.[index]?.price ? "error" : ""}
                  />
                  <button type="button" onClick={() => remove(index)}>
                    削除
                  </button>
                </section>
              </div>
            );
          })}

          <Total control={control} />

          <button
            type="button"
            onClick={() =>
              append({
                name: "",
                quantity: 0,
                price: 0,
              })
            }
          >
            追加
          </button>
          <input type="submit" />
        </form>
      </div>
      {/* <DevTool control={control} /> */}
    </>
  );
}
