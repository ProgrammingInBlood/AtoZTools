import * as React from "react";

interface ICheckboxFieldProps {
  name: string;
  handleChange: (target: any) => void;
}

export const CheckboxField = ({ name, handleChange }: ICheckboxFieldProps) => {
  const handleCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = {
      name,
      value: e.target.checked,
    };
    handleChange({ target });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "6px",
        alignItems: "center",
        paddingTop: "6px",
        paddingBottom: "6px",
      }}
    >
      <input
        type="checkbox"
        id={name}
        className="peer sr-only opacity-0"
        onChange={handleCheckboxToggle}
      />
      <label
        htmlFor={name}
        className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
      >
        <span className="absolute left-14">{name}</span>
      </label>
    </div>
  );
};
