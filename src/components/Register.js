import React, { useState } from "react";
import API from "../api/api";
import "../styles/auth.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await API.post("/api/auth/register", {
        email,
        password,
        role: "VOTER"
      });
      alert("Registered Successfully");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
