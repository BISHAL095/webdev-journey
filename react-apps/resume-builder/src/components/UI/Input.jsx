import "../../styles/input.css";

export default function Input({
  type,
  name,
  value,
  onChange,
}) {
  function formatLabel(key) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  }
  return (
    <div className="input-group">
      <label htmlFor={type}>{formatLabel(name)}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}