import React from 'react'
import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export const Registration = () => {

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

      const handleSubmit = () => {
        
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
              </form>
            </div>
          </div>
        </div>
      );
}
export default Registration