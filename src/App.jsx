import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo.jsx';
import EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx';
import './App.css'

function App() {
  const [isEditingCV, setIsEditingCV] = useState(true)
  const [cvData, setCvData] = useState({
    general: {name: "", email: "", phoneNumber:""},
    education: {schoolName: "", studyTitle: "", date:""},
    experience: {companyName: "", positionTitle: "", mainResponsibilities:"", fromDate:"", toDate:""}
  });

  function updateSection(section, newData) {
    setCvData((prev) => ({
      ...prev,
      [section] : newData
    }));
  };
  

  return (
    
    <div className='app'>
      <div className='cv-container'>
        <div className="cv-header">
          <h1 >{isEditingCV ? "Edit Your CV" : cvData.general.name + "'s " +"CV"}</h1>
        </div>
      <div className="cv-section">
        <GeneralInfo 
        data={cvData.general}
        isEditing={isEditingCV}
        onDataChange={(data) => updateSection('general', data)}
      />
      </div>
      
      

      <div className="cv-section">
        <EducationalExperience
        data={cvData.education}
        isEditing={isEditingCV}
        onDataChange={(data) => updateSection('education', data)}
      />
      </div>
      
      
      <div className="cv-section">
        <PracticalExperience
        data={cvData.experience}
        isEditing={isEditingCV}
        onDataChange={(data) => updateSection('experience', data)}
      />
      </div>
      
      

      <div className="cv-actions">
        <button onClick={() => setIsEditingCV(!isEditingCV)}>
        {isEditingCV ? 'Save CV' : 'Edit CV'}
      </button>
    </div>
      </div>
      

    </div>
    
  )
}

export default App
