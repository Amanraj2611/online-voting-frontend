import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function AddCandidate() {
  const [name, setName] = useState("");
  const [elections, setElections] = useState([]);
  const [electionId, setElectionId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/election", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setElections(res.data));
  }, []);

  const submit = async () => {
    await axios.post(
      "http://localhost:8080/api/admin/candidate",
      { name, election: { id: electionId } },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    alert("Candidate Added Successfully");
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="page-card">
        <h3>Add Candidate</h3>

        <input
          placeholder="Candidate Name"
          onChange={(e) => setName(e.target.value)}
        />

        <select onChange={(e) => setElectionId(e.target.value)}>
          <option>Select Election</option>
          {elections.map((e) => (
            <option key={e.id} value={e.id}>
              {e.title}
            </option>
          ))}
        </select>

        <button onClick={submit}>Add Candidate</button>
      </div>
    </div>
  );
}

export default AddCandidate;
