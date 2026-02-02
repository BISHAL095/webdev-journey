export default function EducationPreview({ data, onEdit }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="card">
      <div className="preview-header">
        <h2>Education</h2>
        {onEdit && <button onClick={onEdit}>Edit</button>}
      </div>
      {data.map((edu, index) => (
        <div key={index} className="preview-item">
          <p><strong>{edu.school}</strong></p>
          <p>{edu.title} | {edu.startDate} - {edu.endDate}</p>
        </div>
      ))}
    </div>
  );
}