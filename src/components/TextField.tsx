import React from "react";
import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";
import { Content } from "../model/branch.model";

interface Props {
  title: string;
  type?: string;
  fieldName: string;
  value?: string;
  errors: FieldErrors<FieldErrors | any>;
  register: UseFormRegister<FieldValues | any>;
}

const TextField = ({
  title,
  value,
  type = "text",
  fieldName,
  errors,
  register,
}: Props) => {
  return (
    <label className="form_box">
      <input
        {...register(fieldName, { required: true })}
        type={type}
        value={value}
        className="form_box-input"
        required
      />
      <span className="form_box-label">{title}</span>
      {errors[fieldName] && <p>error !!!!!!!!!!!!!!!!!!!!!!!!</p>}
    </label>
  );
};

export default TextField;
