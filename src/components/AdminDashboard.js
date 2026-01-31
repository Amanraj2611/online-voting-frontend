import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { FaVoteYea, FaUserPlus, FaPoll, FaChartBar } from "react-icons/fa";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-container">
        <h2>Admin Dashboard</h2>
        <p className="subtitle">Manage Elections & Voting</p>

        <div className="dashboard-grid">

          <div className="dashboard-box">
            <FaPoll size={40} color="#1d2671" />
            <h4>Add Election</h4>
            <button onClick={() => navigate("/add-election")}>
              Open
            </button>
          </div>

          <div className="dashboard-box">
            <FaUserPlus size={40} color="#28a745" />
            <h4>Add Candidate</h4>
            <button onClick={() => navigate("/add-candidate")}>
              Open
            </button>
          </div>

          <div className="dashboard-box">
            <FaVoteYea size={40} color="#f39c12" />
            <h4>Vote</h4>
            <button onClick={() => navigate("/vote")}>
              Vote
            </button>
          </div>

          <div className="dashboard-box">
            <FaChartBar size={40} color="#17a2b8" />
            <h4>Results</h4>
            <button onClick={() => navigate("/result")}>
              View
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
