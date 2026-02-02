import { useState } from "react";
import Input from "../UI/Input";

export default function PersonalForm({ data, onSave }) {
  const [formData, setFormData] = useState(data);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="card">
      <h2>Edit Personal Info</h2>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <button onClick={() => onSave(formData)}>Save</button>
    </div>
  );
}