import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";

function Vote() {
  const [candidateId, setCandidateId] = useState("");

  const vote = async () => {
    await axios.post(
      `http://localhost:8080/api/vote?candidateId=${candidateId}`,
      {},
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    alert("Vote Submitted Successfully");
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="page-card">
        <h3>Vote</h3>

        <input
          placeholder="Enter Candidate ID"
          onChange={(e) => setCandidateId(e.target.value)}
        />

        <button onClick={vote}>Submit Vote</button>
      </div>
    </div>
  );
}

export default Vote;
