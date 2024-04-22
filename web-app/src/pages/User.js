import React, { useContext, useEffect } from 'react'
import { SensorContext } from '../context/GlobalState'
import { useNavigate } from "react-router-dom";


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
      <div>User: {user?.username}</div>
      <button onClick={handleLogout}>Logout</button>
    </>

  )
}

export default User