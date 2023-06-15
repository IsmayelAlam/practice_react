export default function Input({ title, type, name }) {
  return (
    <div
      className={`flex gap-2 capitalize text-lg w-1/5 ${
        name ? "flex-row" : "flex-col"
      }`}
    >
      <label htmlFor={title} className="w-max">
        {title}
      </label>
      <input
        type={type}
        id={title}
        name={name}
        required
        placeholder={title}
        className={`rounded p-2 border-b-4 border-slate-500 bg-slate-300 valid:border-green-400 ${
          name ? "" : "shadow"
        }`}
      />
    </div>
  );
}
