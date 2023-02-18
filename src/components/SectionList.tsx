import Section from "./Section";
import Total from "./Total";
interface SectionListProps {
  register: any;
  control: any;
  errors: any;
  fields: any[];
  append: any;
  remove: any;
}

const SectionList = ({
  register,
  control,
  errors,
  fields,
  append,
  remove,
}: SectionListProps) => {
  return (
    <>
      {fields.map((field, index) => {
        return (
          <Section
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
        onClick={() =>
          append({
            name: "",
            quantity: 0,
            price: 0,
          })
        }
      >
        APPEND
      </button>
    </>
  );
};

export default SectionList;
