import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from '../api/auth';
import { useNavigate } from "react-router-dom";
import { SensorContext } from '../context/GlobalState';


export const Registration = () => {

  const navigate = useNavigate();

  const { user, setUser } = useContext(SensorContext)
  useEffect(() => { if (user) navigate("/home") }, [user])

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await register(formData.username, formData.password);

      if (response.status === 200) {
          console.log("Registration successful");
          navigate('/login');
      } else {
          console.error("Registration failed: ", response.status, response.statusText);
          // update ui
      }
  } catch (error) {
      console.error("An error occurred during registration:", error);
  }
    
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">Registration</h2>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="username"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="inputConfirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <button type="button" onClick={() => navigate('/login')} className="btn btn-primary m-1">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Registration