import React, { useEffect, useState } from "react"
import logo from "../../assets/logo.png"
import AttendanceDetails from "./AttendanceDetails"

const Test = () => {
  const [data, setData] = useState({})

  let token = JSON.parse(localStorage.getItem("idToken"))

  useEffect(() => {
    fetch("https://test.nexisltd.com/test ", {
      method: "GET",
      headers: {
        authorization: `bearer ${token.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  const Attendences = Object.values(data)
  const Attendences2 = Object.keys(data)
  
  return (
    <div>
      <div className="logoo">
        <img src={logo} alt="" />
      </div>
      <div className="attendanceTitle">
        <h2>Attendance information</h2>
      </div>
      <div className="table">
        <div className="title">
          <p>Date</p>
          <p>Employee Name</p>       
          <p>Position</p>
          <p>Status</p>
        </div>
        {Attendences.map((attendance) => (
          <AttendanceDetails key={attendance.id} attendance={attendance} />
        ))}
      </div>
    </div>
  )
}

export default Test
