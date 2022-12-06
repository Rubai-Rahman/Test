import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./Pages/Login/Login"
import Name from "./Pages/SignUp/Name"
import Password from "./Pages/SignUp/Password"
import PhoneEmail from "./Pages/SignUp/PhoneEmail"
import Test from "./Pages/Test/Test"

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [token,setToken] = useState("")

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login token={token} setToken={setToken} />} />
          <Route
            path="/name"
            element={
              <Name setFirstName={setFirstName} setLastName={setLastName} />
            }
          ></Route>
          <Route
            path="/phoneEmail"
            element={
              <PhoneEmail setPhoneNumber={setPhoneNumber} setEmail={setEmail} />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Password
                firstName={firstName}
                lastName={lastName}
                phoneNumber={phoneNumber}
                email={email}
              />
            }
          ></Route>

          <Route path="/test" element={<Test token={token} />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
