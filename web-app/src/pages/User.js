import React, { useContext, useEffect } from 'react'
import { SensorContext } from '../context/GlobalState'
import { useNavigate } from "react-router-dom";
import Header from '../component/Header';


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
      <Header></Header>
      <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h5 className="card-title">User Profile</h5>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Welcome back!</h6>
          <p className="card-text">Username: {user?.username}</p>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
        <div className="card-footer text-muted">
          Logged in as {user?.username}
        </div>
      </div>
    </div>
    </>

  )
}

export default User