import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    skills: [],
    address: "",
    state: ""
  });

  // Handle text, date, select, radio
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle checkbox (skills)
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      skills: checked
        ? [...prevData.skills, value]
        : prevData.skills.filter((skill) => skill !== value)
    }));
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Registration Details:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Skills: ${formData.skills.join(", ")}
Address: ${formData.address}
State: ${formData.state}`
    );

    // Optional: Reset after submit
    handleCancel();
  };

  // Reset form
  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      skills: [],
      address: "",
      state: ""
    });
  };

  return (
    <div className="container">
      <div className="form-title">
  <h2>Student Registration</h2>
  <p>Please fill in your details below</p>
</div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            /> Male

            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              required
            /> Female
          </div>
        </div>

        <div className="form-group">
          <label>Skills:</label>
          <div>
            <input
              type="checkbox"
              value="Java"
              checked={formData.skills.includes("Java")}
              onChange={handleSkillChange}
            /> Java

            <input
              type="checkbox"
              value="Python"
              checked={formData.skills.includes("Python")}
              onChange={handleSkillChange}
            /> Python

            <input
              type="checkbox"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleSkillChange}
            /> React
          </div>
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label>State:</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            <option value="New York">New York</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default App;