import React from "react"
import logo from "../../assets/logo.png"
import bg from "../../assets/bg.png"

import { HiOutlineArrowRight } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom"
const PhoneEmail = ({setPhoneNumber,setEmail}) => {
  const navigate = useNavigate()
   const handlePhoneNumber = (e) => {
     setPhoneNumber(e.target.value)
     e.preventDefault()
   }
   const handleEmail = (e) => {
     setEmail(e.target.value)
     e.preventDefault()
   }
  const handleOnclick = (e) => {
    navigate("/signup")
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
          onBlur={handlePhoneNumber}
          type="text"
          placeholder="Write PhoneNumber"
        />
        <input
          onBlur={handleEmail}
          type="email"
          placeholder="Write Email Address"
        />
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
            to="/name"
          >
            Back
          </Link>
          <button
            className="NameForm"
            onClick={handleOnclick}
            style={{
          
              alignSelf: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <p>Next Step</p>
              <HiOutlineArrowRight style={{ fontSize: 20 }} />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhoneEmail
