interface SectionProps {
  register: any;
  errors: any;
  field: any;
  index: any;
  remove: any;
}

const Section = ({ register, errors, field, index, remove }: SectionProps) => {
  return (
    <>
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
            DELETE
          </button>
        </section>
      </div>
    </>
  );
};

export default Section;
