import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    age: '',
    sex: '',
    email: '',
    address: '',
    cellPhone: '',
    workPhone: '',
    authorizedPerson: '',
    maritalStatus: '',
    specify: '',
    emergencyContact1: '',
    emergencyPhone1: '',
    emergencyContact2: '',
    emergencyPhone2: '',
    primaryCarePhysician: '',
    physicianPhone: '',
    reasonForAppointment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) alert('Patient details saved successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2>INFORMATION</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} placeholder="Patient Name" />
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Date of Birth" />
        </div>
        <div className="row">
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
          <input type="text" name="sex" value={formData.sex} onChange={handleChange} placeholder="Sex" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        </div>
        <div className="row">
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        </div>
        <div className="row">
          <input type="tel" name="cellPhone" value={formData.cellPhone} onChange={handleChange} placeholder="Cell Phone" />
          <input type="tel" name="workPhone" value={formData.workPhone} onChange={handleChange} placeholder="Work Phone" />
        </div>
        <div className="row">
          <input type="text" name="authorizedPerson" value={formData.authorizedPerson} onChange={handleChange} placeholder="Authorized Person" />
        </div>
        <h2>MARITAL STATUS</h2>
        <div className="row">
          <label>
            <input type="radio" name="maritalStatus" value="Divorced" onChange={handleChange} /> Divorced
          </label>
          <label>
            <input type="radio" name="maritalStatus" value="Single" onChange={handleChange} /> Single
          </label>
          <label>
            <input type="radio" name="maritalStatus" value="Married" onChange={handleChange} /> Married
          </label>
          <label>
            <input type="radio" name="maritalStatus" value="Widowed" onChange={handleChange} /> Widowed
          </label>
          <label>
            <input type="radio" name="maritalStatus" value="Other" onChange={handleChange} /> Other
          </label>
          <input type="text" name="specify" value={formData.specify} onChange={handleChange} placeholder="Specify" />
        </div>
        <div className="row">
          <input type="text" name="emergencyContact1" value={formData.emergencyContact1} onChange={handleChange} placeholder="Emergency Contact" />
          <input type="tel" name="emergencyPhone1" value={formData.emergencyPhone1} onChange={handleChange} placeholder="Phone" />
        </div>
        <div className="row">
          <input type="text" name="emergencyContact2" value={formData.emergencyContact2} onChange={handleChange} placeholder="Emergency Contact" />
          <input type="tel" name="emergencyPhone2" value={formData.emergencyPhone2} onChange={handleChange} placeholder="Phone" />
        </div>
        <div className="row">
          <input type="text" name="primaryCarePhysician" value={formData.primaryCarePhysician} onChange={handleChange} placeholder="Primary Care Physician" />
          <input type="tel" name="physicianPhone" value={formData.physicianPhone} onChange={handleChange} placeholder="Phone" />
        </div>
        <div className="row">
          <input type="text" name="reasonForAppointment" value={formData.reasonForAppointment} onChange={handleChange} placeholder="Reason for Appointment" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;