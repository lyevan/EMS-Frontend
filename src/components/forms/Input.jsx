import React from "react";

const Input = ({
  icon,
  label,
  name,
  type = "text",
  required = false,
  onChange,
}) => {
  return (
    <section className="flex flex-col gap-2">
      <span className="label-text">
        {!required ? (
          label
        ) : (
          <>
            {label} <span className="text-error">*</span>
          </>
        )}
      </span>

      <label className="input focus-within:ring-none focus-within:outline-none">
        {icon && (
          <span className="flex items-center pr-2 border-r border-neutral">
            {icon}
          </span>
        )}
        <input
          type={type}
          name={name}
          required={required}
          className="grow"
          placeholder={label}
          onChange={onChange}
        />
      </label>
    </section>
  );
};

export default Input;
