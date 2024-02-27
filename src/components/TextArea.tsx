import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  title: string;
  type?: string;
  fieldName: string;
  value?: string;
  errors: FieldErrors<FieldErrors | any>;
  register: UseFormRegister<FieldValues | any>;
}
const TextArea = ({
  title,
  value,
  type = "text",
  fieldName,
  errors,
  register,
}: Props) => {
  return (
    <label className="form_box">
      <textarea
        rows={2}
        {...register(fieldName, { required: true })}
        value={value}
        className="form_box-input"
        required
      />
      <span className="form_box-label">{title}</span>
    </label>
  );
};

export default TextArea;
