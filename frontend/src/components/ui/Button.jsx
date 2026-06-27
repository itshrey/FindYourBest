function Button({
  children,
  variant = "primary",
}) {

  const base =
    "rounded-xl px-6 py-3 font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-pink-500 text-white hover:bg-pink-600",

    secondary:
      "border border-slate-600 text-white hover:bg-slate-800",
  };

  return (
    <button
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;