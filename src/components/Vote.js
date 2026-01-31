import Navbar from "./Navbar";
import { useState } from "react";
import API from "../api/api";

function Vote() {
  const [candidateId, setCandidateId] = useState("");

  const vote = async () => {
    try {
      await API.post(`/api/vote?candidateId=${candidateId}`);
      alert("Vote Submitted Successfully");
    } catch {
      alert("Vote Failed");
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="page-card">
        <h3>Vote</h3>

        <input
          placeholder="Candidate ID"
          onChange={(e) => setCandidateId(e.target.value)}
        />

        <button onClick={vote}>Submit Vote</button>
      </div>
    </div>
  );
}

export default Vote;
