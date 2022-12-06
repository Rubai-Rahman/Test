import React, { useEffect, useState } from "react"

const Test = ({ token, setToken }) => {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      method: "GET",
      headers: {
        authorization: `bearer${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }, [])
  console.log(data)
  console.log(token)
  return (
    <div>
      <h2>This is Test</h2>
    </div>
  )
}

export default Test
