import React from "react";

const Input = ({
  placeholder,
  type,
  required,
  label,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-[#2E333B] font-semibold mb-1 text-[14px] dark:text-zinc-200  ">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`border dark:text-zinc-200 bg-[#F2F4F8] dark:bg-[#151617] ${
          error ? "border-red-500" : "border-[#E3E7EC] dark:border-zinc-700"
        } outline-none px-2 py-1.5 rounded-md`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
