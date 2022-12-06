import React from "react"
import logo from "../../assets/logo.png"
import bg from "../../assets/bg.png"
import { Link, useNavigate } from "react-router-dom"
import { HiOutlineArrowRight } from "react-icons/hi"
const Name = ({ setFirstName, setLastName }) => {
  const navigate = useNavigate()
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
    e.preventDefault()
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
    e.preventDefault()
  }
  const handleOnclick = (e) => {
    navigate("/phoneEmail")
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
          onBlur={handleFirstName}
          type="text"
          placeholder="Write First Name"
        />
        <input
          onBlur={handleLastName}
          type="text"
          placeholder="Write Last Name"
        />

        <button
          onClick={handleOnclick}
          style={{
            width: 142,
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
        <div className="option">
          <span>Already have an account?</span>
          <Link
            style={{
              fontSize: 14,
              color: "var(--color-text)",
              fontWeight: 600,
              marginLeft: 5,
            }}
            to="/login"
          >
            LOGIN HERE!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Name
