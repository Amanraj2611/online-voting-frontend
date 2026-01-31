import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";

function AddElection() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = async () => {
    await axios.post(
      "http://localhost:8080/api/admin/election",
      { title, description: desc, active: true },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    alert("Election Added Successfully");
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="page-card">
        <h3>Add Election</h3>

        <input
          placeholder="Election Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Election Description"
          onChange={(e) => setDesc(e.target.value)}
        />

        <button onClick={submit}>Create Election</button>
      </div>
    </div>
  );
}

export default AddElection;
