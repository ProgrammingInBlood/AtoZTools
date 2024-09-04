import { useState } from "react";

interface ISelectFieldProps {
  name: string;
  options: string[];
  handleChange: (target: any) => void;
}

export const SelectField = ({
  name,
  options,
  handleChange,
}: ISelectFieldProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const onOptionChange = (option: string) => {
    setSelectedOption(option);
    handleChange({ target: { name, value: option } });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-4">
      <label className="text-gray-500 block mb-2" htmlFor={name}>
        {name}
      </label>

      <div className="flex justify-evenly border border-gray-700 rounded-md w-full bg-gray-800">
        {options.map((option: string, index: number) => (
          <button
            key={index}
            className={`border-none px-2 py-1 rounded-md w-full text-white ${
              selectedOption === option
                ? "bg-green-600"
                : "bg-gray-900 hover:bg-green-500"
            }`}
            onClick={() => onOptionChange(option)}
          >
            <input
              type="radio"
              className="hidden"
              id={`${name}-${option}`}
              name={name}
              value={option}
              checked={selectedOption === option}
              readOnly
            />
            <label
              className="cursor-pointer w-full text-center"
              htmlFor={`${name}-${option}`}
            >
              {option}
            </label>
          </button>
        ))}
      </div>
    </div>
  );
};
