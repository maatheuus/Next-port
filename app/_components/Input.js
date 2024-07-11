import { twMerge } from "tailwind-merge";

import(twMerge);

function Input({ type, classInput, ...props }) {
  const base =
    "pl-4 py-3 rounded-md border border-gray-200 outline-none text-stone-600 text-2xl shadow-sm";

  const className = {
    text: base + "h-16 mb-6",
    email: base + "h-16 mb-6",
    textarea: base + "pt-4",
  };

  return (
    <input
      className={twMerge(className[type], classInput)}
      type={type}
      required
      {...props}
    />
  );
}

export default Input;
