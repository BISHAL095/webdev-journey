import { useState } from "react";
import PersonalPreview from "./components/previews/PersonalPreview";
import EducationPreview from "./components/previews/EducationPreview";
import ExperiencePreview from "./components/previews/ExperiencePreview";
import PersonalForm from "./components/forms/PersonalForm";
import EducationForm from "./components/forms/EducationForm";
import ExperienceForm from "./components/forms/ExperienceForm";
import FinalCV from "./components/previews/FinalCV";

function App() {
  const [cvData, setCvData] = useState({
    personal: {
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "+91 9876543210",
      address: "123 Main St, City, Country",
    },
    education: [
      {
        school: "ABC University",
        title: "B.Tech in Computer Science",
        startDate: "2018",
        endDate: "2022",
      },
    ],
    experience: [
      {
        company: "Tech Solutions",
        position: "Software Engineer",
        startDate: "2022",
        endDate: "Present",
        details: "Worked on web development projects using React and Node.js",
      },
    ],
  });

  const [editingSection, setEditingSection] = useState(null); // null or 'personal', 'education', 'experience'

  // Save handlers
  function savePersonal(data) {
    setCvData(prev => ({ ...prev, personal: data }));
    setEditingSection(null);
  }

  function saveEducation(data) {
    setCvData(prev => ({ ...prev, education: data }));
    setEditingSection(null);
  }

  function saveExperience(data) {
    setCvData(prev => ({ ...prev, experience: data }));
    setEditingSection(null);
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>CV Builder</h1>
      <div className="app">
        {/* Left side */}
        <div className="left-side">
          {/* Personal */}
          {editingSection === "personal" ? (
            <PersonalForm data={cvData.personal} onSave={savePersonal} />
          ) : (
            <PersonalPreview
              data={cvData.personal}
              onEdit={() => setEditingSection("personal")}
            />
          )}

          {/* Education */}
          {editingSection === "education" ? (
            <EducationForm data={cvData.education} onSave={saveEducation} />
          ) : (
            <EducationPreview
              data={cvData.education}
              onEdit={() => setEditingSection("education")}
            />
          )}

          {/* Experience */}
          {editingSection === "experience" ? (
            <ExperienceForm data={cvData.experience} onSave={saveExperience} />
          ) : (
            <ExperiencePreview
              data={cvData.experience}
              onEdit={() => setEditingSection("experience")}
            />
          )}
        </div>

        {/* Right side: Final CV */}
        <div className="right-side">
          <FinalCV data={cvData} />
        </div>
      </div>
    </>
  );
}

export default App;