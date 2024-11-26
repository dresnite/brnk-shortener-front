import { ChangeEventHandler } from "react";

interface AuthInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function AuthInput({
  className,
  type,
  placeholder,
  id,
  name,
  onChange,
}: AuthInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={onChange}
      className={`text-base w-[450px] text-white font-semibold bg-softCyanGray bg-opacity-20 rounded-large px-8 py-5 ${className}`}
    />
  );
}
