import * as React from "react";

interface ITextAreaProps {
  name: string;
  rows?: number;
  cols?: number;
  role?: string;
  defaultValue?: string | number;
  handleChange: (target: any) => void;
  hideLabel?: boolean;
  value?: string | number;
}

export const TextArea = ({
  name,
  handleChange,
  role,
  rows,
  cols,
  defaultValue,
  hideLabel,
  value,
}: ITextAreaProps) => {
  return (
    <div>
      {!hideLabel && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {name}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        onChange={handleChange}
        rows={rows}
        cols={cols}
        role={role}
        defaultValue={defaultValue}
        value={value}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
