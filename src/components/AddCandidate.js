import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import API from "../api/api";

function AddCandidate() {
  const [name, setName] = useState("");
  const [elections, setElections] = useState([]);
  const [electionId, setElectionId] = useState("");

  useEffect(() => {
    API.get("/api/election").then(res => setElections(res.data));
  }, []);

  const submit = async () => {
    try {
      await API.post("/api/admin/candidate", {
        name,
        election: { id: electionId }
      });

      alert("Candidate added successfully");
    } catch {
      alert("Error adding candidate");
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="page-card">
        <h3>Add Candidate</h3>

        <input placeholder="Candidate Name" onChange={(e) => setName(e.target.value)} />

        <select onChange={(e) => setElectionId(e.target.value)}>
          <option>Select Election</option>
          {elections.map(e => (
            <option key={e.id} value={e.id}>{e.title}</option>
          ))}
        </select>

        <button onClick={submit}>Add Candidate</button>
      </div>
    </div>
  );
}

export default AddCandidate;
