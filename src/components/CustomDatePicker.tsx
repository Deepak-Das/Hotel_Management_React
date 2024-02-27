import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  title: string;
}

const CustomDatePicker = ({ title }: Props) => {
  const [date, setDate] = useState<Date | null>(null);
  const [isFilled, setIsFilled] = useState(!!date);

  const handleDateChange = (date: Date) => {
    setDate(date);
    setIsFilled(!!date); // Set isFilled based on whether date has a value
  };

  return (
    <label className="form_box relative ">
      <DatePicker
        dateFormat="dd-MM-yyyy"
        selected={date}
        onChange={handleDateChange}
        customInput={
          <input
            type="text"
            className={` " tw-w-[300px] tw-p-[.16rem] tw-text-[0.9rem]   tw-outline-none ${isFilled ? "tw-border-b-2 tw-border-primaryColor  tw-bg-indigo-100" : "tw-border-b tw-border-textColor "}`}
            required
            onFocus={() => setIsFilled(true)} // Set isFilled to true when input is focused
            onBlur={() => setIsFilled(!!date)} // Set isFilled based on whether date has a value when input is blurred
          />
        }
      />
      <span
        className={`form_box-label  absolute transition-all   ${
          isFilled
            ? "-tw-top-[20px] tw-text-[.9rem] tw-text-primaryColor"
            : "tw-top-[50%] tw-translate-y-[-50%] tw-text-[.7rem]  tw-text-textColor"
        }`}
      >
        {title}
      </span>
    </label>
  );
};

export default CustomDatePicker;
