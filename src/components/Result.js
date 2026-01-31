import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import API from "../api/api";

function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    API.get("/api/result/1")
      .then((res) => setResults(res.data))
      .catch(() => alert("Error fetching results"));
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <h2>Election Results</h2>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Candidate</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{r.candidate}</td>
                <td>{r.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Result;
