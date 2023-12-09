"use client";

import { permanentRedirect } from "next/navigation";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean; // we're going to use when displaying prices in our inputs
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors; // don't confuse this with the action of registering and creating a user, no, register is a field which we're going to need for react hook form
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text", // default
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        // it needs to be empty space not "" because we're going to use nice floating animation
        type={type}
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          formatPrice ? "pl-9" : "pl-4"
        } ${errors[id] ? "border-rose-500" : "border-neutral-300"} ${
          errors[id] ? "focus:border-rose-500" : "focus:border-black"
        }`}
      />
      <label
        className={`absolute text-md duration-150 tranform -translate-y-3 top-5 z-10 origin-[0]
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
         `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
