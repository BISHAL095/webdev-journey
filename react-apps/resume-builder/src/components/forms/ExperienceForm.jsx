import { useState } from "react";
import Input from "../UI/Input";

export default function ExperienceForm({ data, onSave }) {
  const [experience, setExperience] = useState(data);

  function handleChange(index, e) {
    const newExp = [...experience];
    newExp[index][e.target.name] = e.target.value;
    setExperience(newExp);
  }

  function addExperience() {
    setExperience([
      ...experience,
      { company: "", position: "", details: "", startDate: "", endDate: "" }
    ]);
  }

  function removeExperience(index) {
    const newExp = experience.filter((_, i) => i !== index);
    setExperience(newExp);
  }

  return (
    <div className="card">
      <h2>Edit Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="exp-entry">
          <Input
            type="text"
            name="company"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            type="text"
            name="position"
            placeholder="Position Title"
            value={exp.position}
            onChange={(e) => handleChange(index, e)}
          />
          <Input
            type="text"
            name="details"
            placeholder="Main Responsibilities"
            value={exp.details}
            onChange={(e) => handleChange(index, e)}
          />
          <div className="date-row">
            <Input
              type="text"
              name="startDate"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => handleChange(index, e)}
            />
            <Input
              type="text"
              name="endDate"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <button onClick={() => removeExperience(index)}>Remove</button>
          <hr />
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
      <button onClick={() => onSave(experience)}>Save</button>
    </div>
  );
}