import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  type: HTMLInputTypeAttribute | "textarea" | "files";
  value?: any;
  name: string;
  onChange: (value: any) => void;
};

const Input: React.FC<InputProps> = ({ type, value, name, onChange }) => {
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full py-2 px-3 text-gray-500 border border-gray-300 rounded-md"
      />
    );
  }
  return (
    <input
      type={type === "files" ? "file" : type}
      value={value}
      name={name}
      onChange={(e) => onChange(e.target.files || e.target.value)}
      multiple={type === "files"}
      className="text-sm leading-none font-medium border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 dark:focus:border-white dark:bg-gray-800 dark:text-white"
    />
  );
};

export default Input;
