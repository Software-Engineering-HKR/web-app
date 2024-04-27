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

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {

      const response = await register(formData.username, formData.password);
      console.log("status: ", response)

      if (response.status === 200) {
        setSuccessMessage('Registration successful');
        setTimeout(() => navigate('/login'), 3000)
      } else if (response.status === 409) {
        console.log("hoya")
        setErrorMessage('User already exists.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }

  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">Registration</h2>
            {errorMessage && !successMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
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