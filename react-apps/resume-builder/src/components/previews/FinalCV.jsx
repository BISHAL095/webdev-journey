export default function FinalCV({ data }) {
  if (!data) return null;

  return (
    <div className="final-cv">
      {/* PERSONAL DETAILS */}
      {data.personal && (
        <div className="cv-section">
          <h1>{data.personal.name || "Your Name"}</h1>
          <p>{data.personal.email}</p>
          <p>{data.personal.phoneNumber}</p>
        </div>
      )}

      {/* EDUCATION */}
      {data.education && data.education.length > 0 && (
        <div className="cv-section">
          <h2>Education</h2>
          {data.education.map((edu, index) => (
            <div key={index}>
              <p><strong>{edu.school || "School Name"}</strong></p>
              <p>{edu.title || "Title of Study"} | {edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}

      {/* EXPERIENCE */}
      {data.experience && data.experience.length > 0 && (
        <div className="cv-section">
          <h2>Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index}>
              <p><strong>{exp.company || "Company Name"}</strong></p>
              <p>{exp.position || "Position"} | {exp.startDate} - {exp.endDate}</p>
              <p>{exp.details || "Main responsibilities..."}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}