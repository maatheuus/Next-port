function Input({ type, ...props }) {
  const base =
    "pl-4 py-2 rounded-lg border border-black outline-none text-stone-950 shadow-sm";

  const className = {
    text: base + "h-16 mb-6",
    email: base + "h-16 mb-6",
    textarea: base + "h-40 pt-4",
  };

  return type !== "textarea" ? (
    <input className={className[type]} type={type} required {...props} />
  ) : (
    <textarea className={className[type]} type={type} required {...props} />
  );
}

export default Input;
