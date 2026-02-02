export default function ExperiencePreview({ data, onEdit }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="card">
      <div className="preview-header">
        <h2>Experience</h2>
        {onEdit && <button onClick={onEdit}>Edit</button>}
      </div>
      {data.map((exp, index) => (
        <div key={index} className="preview-item">
          <p><strong>{exp.company}</strong></p>
          <p>{exp.position} | {exp.startDate} - {exp.endDate}</p>
          <p>{exp.details}</p>
        </div>
      ))}
    </div>
  );
}