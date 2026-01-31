import Navbar from "./Navbar";
import { useState } from "react";
import API from "../api/api";

function AddElection() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = async () => {
    try {
      await API.post("/api/admin/election", {
        title,
        description: desc,
        active: true,
      });

      alert("Election Added Successfully");
    } catch {
      alert("Error adding election");
    }
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
