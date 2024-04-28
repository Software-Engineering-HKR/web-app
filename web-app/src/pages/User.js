import React, { useContext, useEffect } from 'react'
import { SensorContext } from '../context/GlobalState'
import { useNavigate } from "react-router-dom";
import Header from '../component/Header';
import '../css/Profile.css';



const User = () => {

  const { user, setUser } = useContext(SensorContext)
  const navigate = useNavigate();
  useEffect(() => { if (!user) navigate("/login") }, [user])

  const handleLogout = () => {
    localStorage.setItem("user", null);
    setUser(null)
    navigate('/');
  }

  return (    
      <>
        <Header />
        <div className="container mt-5 d-flex justify-content-center">
          <div className="card shadow-lg bg-lightgray border-0" style={{ position: "relative", width: "400px", fontSize: "18px" }}>
            <div className="card-body text-center">
              <h5 className="card-title ">Profile</h5>
              <p className="card-text">Username: {user?.username}</p>
              <button className="btn btn-danger" onClick={handleLogout} style={{ fontFamily: "Noto-sans", fontSize: "20px" }}>Logout</button> {/* Apply inline styles */}
            </div>
          </div>
        </div>
      </>
  );
};

export default User;