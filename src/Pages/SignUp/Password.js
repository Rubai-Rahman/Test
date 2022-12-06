import React, { useState } from "react"
import logo from "../../assets/logo.png"
import bg from "../../assets/bg.png"

import { Link, useNavigate } from "react-router-dom"
const Password = ({ firstName, lastName, email, phoneNumber }) => {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const handlePassword = (e) => {
    let value = e.target.value
    if (value.length <= 7) {
      alert("password is less than 8 character")
    } else {
      setPassword(password)
    }
    console.log(value.length)
    setPassword(value)
  }
  const handleOnclick = (e) => {
    const userData = {
      first_name: firstName,
      last_name: lastName,
      phone_Number: phoneNumber,
      email: email,
      password: password,
    }

    fetch("https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })

    navigate("/login")
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
        <h2>SignUp Form</h2>
        <input
          onBlur={handlePassword}
          type="text"
          placeholder="Write Password"
        />
        <span style={{ marginTop: -160 }} className="span">
          Your password must be 8 character
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 150,
          }}
        >
          <Link
            style={{
              fontSize: 12,
              color: "var(--color-small)",
              fontWeight: 700,
            }}
            to="/phoneEmail"
          >
            Back
          </Link>
          <button
            onClick={handleOnclick}
            style={{
              width: 104,
              alignSelf: "center",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Password
