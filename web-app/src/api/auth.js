import axios from "axios";

const url = "http://localhost:5000"

const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${url}/login`,
      { username, password },
    )
    return response
  } catch (error) {
    console.log(error)
  }
}

const register = async (username, password) => {
  try {
    const response = await axios.post(
      `${url}/register`,
      { username, password },
    )
    return response
  } catch (error) {
    console.log(error)
  }
}

export {
  login,
  register
}