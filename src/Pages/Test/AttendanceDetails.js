import React from "react"

const AttendanceDetails = ({ attendance }) => {
  const date = attendance?.attendance

  const { name,position } = attendance
  return (
    <div className="table2">
      <div className="data">
        <div className="date">
          {Object.keys(date)[0]}
        </div>
        <div>
          {name}
        </div>
        <div>
          {position}
        </div>
        <div>
          {Object.values(date)[2].status}
        </div>
      </div>
    </div>
  )
}

export default AttendanceDetails
