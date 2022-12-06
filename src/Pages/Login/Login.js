import React, { useState } from "react"
import logo from "../../assets/logo.png"
import bg from "../../assets/bg.png"
import { Link, useNavigate } from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handlePassword = (e) => {
    let value = e.target.value
    if (value.length <= 7) {
      alert("password is less than 8 character")
    } else {
      setPassword(password)
    }

    setPassword(value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    e.preventDefault()
  }
  const handleSubmit = (e) => {
    const user = {
      email: email,
      password: password,
    }
    fetch("https://test.nexisltd.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
       

        localStorage.setItem("idToken", JSON.stringify(data))
      })
    navigate("/test")
    e.preventDefault()
  }

  return (
    <div className="container">
      <div className="sideImg">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="bg">
          <img src={bg} alt="" />
        </div>
      </div>
      <div className="form">
        <h2>Log in Form</h2>
        <input
          onBlur={handleEmail}
          type="text"
          placeholder="Write Email Address"
        />
        <input
          onBlur={handlePassword}
          type="text"
          placeholder="Write Password"
        />
        <span className="span">Your password must be 8 character</span>
        <button
          onClick={handleSubmit}
          style={{
            width: 104,
            alignSelf: "center",
          }}
        >
          Log In
        </button>
        <div className="option">
          <span>Don't have an account?</span>
          <Link
            style={{
              fontSize: 14,
              color: "var(--color-text)",
              fontWeight: 600,
              marginLeft: 5,
            }}
            to="/name"
          >
            SIGNUP HERE!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
