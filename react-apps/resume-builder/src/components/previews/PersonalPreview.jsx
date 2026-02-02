export default function PersonalPreview({ data, onEdit }) {
  if (!data) return null;

  function formatLabel(key) {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, str => str.toUpperCase());
  }

  return (
    <div className="card">
      <div className="preview-header">
        <h2>Personal</h2>
        <button onClick={onEdit}>Edit</button>
      </div>

      {Object.entries(data)
        .filter(([_, value]) => value)
        .map(([key, value]) => (
          <p className="preview-item" key={key}>
            <strong>{formatLabel(key)}:</strong> {value}
          </p>
        ))}
    </div>
  );
}