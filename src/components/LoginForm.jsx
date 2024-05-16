import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending form data to the backend API endpoint
      const response = await axios.post("/api/data", formData);
      console.log(response.data);
      alert("Data saved successfully!");
      // Redirect to MongoDB URL
      window.location.href = "mongodb+srv://bewinshaji01:bewin1302@cluster0.e6nzcye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while saving data.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default LoginForm;





