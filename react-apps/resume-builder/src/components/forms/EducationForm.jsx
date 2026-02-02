import { useState } from "react";
import Input from "../UI/Input";

export default function EducationForm({ data, onSave }) {
  const [education, setEducation] = useState(data);

  function handleChange(index, e) {
    const newEdu = [...education];
    newEdu[index][e.target.name] = e.target.value;
    setEducation(newEdu);
  }

  function addEducation() {
    setEducation([...education, { school: "", title: "", startDate: "", endDate: "" }]);
  }

  function removeEducation(index) {
    const newEdu = education.filter((_, i) => i !== index);
    setEducation(newEdu);
  }

  return (
    <div className="card">
      <h2>Edit Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="edu-entry">
          <Input
            type="text"
            name="school"
            placeholder="School Name"
            value={edu.school}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            type="text"
            name="title"
            placeholder="Title of Study"
            value={edu.title}
            onChange={(e) => handleChange(index, e)}
          />
          <div className="date-row">
            <Input
              type="text"
              name="startDate"
              placeholder="Start Date"
              value={edu.startDate}
              onChange={(e) => handleChange(index, e)}
            />
            <Input
              type="text"
              name="endDate"
              placeholder="End Date"
              value={edu.endDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <button onClick={() => removeEducation(index)}>Remove</button>
          <hr />
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
      <button onClick={() => onSave(education)}>Save</button>
    </div>
  );
}