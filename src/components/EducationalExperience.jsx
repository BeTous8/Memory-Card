import React, {useState} from "react";

export default function EducationalExperience ({data, isEditing, onDataChange}) {
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newData = {
            ...data,
            [name] : value
        }
        onDataChange(newData)
        
    };


    return (
        <>
            <h3>Educational Experience</h3>
            {isEditing ? 
            <form>
                <label>School Name</label>
                <input
                    type='text'
                    name="schoolName"
                    value={data.schoolName}
                    onChange={handleInputChange}
                />
                <label>Study Title:</label>
                <input
                    type='text'
                    name="studyTitle"
                    value={data.studyTitle}
                    onChange={handleInputChange}
                />
                <label>Date:</label>
                <input
                    type='date'
                    name="date"
                    value={data.date}
                    onChange={handleInputChange}
                />
            </form>
            : 
            <div>
                <p><strong>school name:</strong> {data.schoolName}</p>
                <p><strong>title of study:</strong> {data.studyTitle}</p>
                <p><strong>date of study:</strong> {data.date}</p>
            </div>
            }
            
            <button onClick={() => onDataChange({ name: '', email: '', phoneNumber: '' })}>
                Reset
            </button>
        </>
    )
}