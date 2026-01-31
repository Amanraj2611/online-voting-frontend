import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/result/1", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setResults(res.data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          🗳 Election Results
        </h2>

        <div className="result-card">
          <table className="result-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Candidate Name</th>
                <th>Total Votes</th>
              </tr>
            </thead>
            <tbody>
              {results.length > 0 ? (
                results.map((r, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{r.candidate}</td>
                    <td>
                      <span className="vote-badge">{r.votes}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No Results Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Result;
