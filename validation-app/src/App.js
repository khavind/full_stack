import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Email Validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|[a-z]{2,})$/;
    return emailRegex.test(email);
  };

  // Password Validation
  const validatePassword = (password) => {
    const passwordRegex =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email =
        "Invalid Email! Must contain @ and .com/.in/.country code";
    }

    if (!validatePassword(password)) {
      validationErrors.password =
        "Password must start with capital letter, contain one number, one special character & minimum 5 characters.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Login Successful!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <h2>Login Validation Form</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          {errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;