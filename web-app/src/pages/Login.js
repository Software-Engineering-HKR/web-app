import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../api/auth';
import { useNavigate } from "react-router-dom";
import { SensorContext } from '../context/GlobalState';

export const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(SensorContext);

  useEffect(() => { 
    if (user) navigate("/home");
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    e.preventDefault();
    try {
      const response = await login(formData.username, formData.password);

      if (response.status === 200 && response.data) {
        localStorage.setItem("user", JSON.stringify(response.data)); // Store user data
        setUser(response.data);
        setSuccessMessage('Login successful! Redirecting...');
        navigate('/home')
      } else if (response.status === 404)  {
        setErrorMessage('Login failed. User not found.');
      } else if (response.status === 401)  {
        setErrorMessage('Login failed. Invalid Credentials.');
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
            <h2 className="mb-3">Login</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="username"
                value={formData.username}
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
            <button type="submit" className="btn btn-primary m-1">Login</button>
            <button type="button" onClick={() => navigate('/register')} className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
