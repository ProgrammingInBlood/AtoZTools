import * as React from "react";

interface IInputFieldProps {
  name: string;
  type: "color" | "range" | "text";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | number;
  handleChange: (target: any) => void;
  hideLabel?: boolean;
  value?: string | number;
}

export const InputField = ({
  name,
  type,
  handleChange,
  min,
  max,
  step,
  defaultValue,
  hideLabel,
  value,
}: IInputFieldProps) => {
  const updateSliderBackground = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 w-full max-w-md shadow-lg">
      {!hideLabel && (
        <label htmlFor={name} className="block text-white font-bold mb-2">
          {name}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        className="w-full accent-green-500"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onInput={updateSliderBackground}
        value={value}
      />

      {type === "range" && (
        <div className="flex justify-between text-gray-500 mt-2">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
};
