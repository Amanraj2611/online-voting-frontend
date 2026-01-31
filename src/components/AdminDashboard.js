import { useNavigate } from "react-router-dom";
import { FaVoteYea, FaUserPlus, FaPoll, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { useEffect } from "react";
import Navbar from "./Navbar";

function AdminDashboard() {
  const navigate = useNavigate();

  // 🔐 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Admin Dashboard</h2>
          <button className="logout-btn" onClick={logout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <p className="subtitle">Manage Elections & Voting</p>

        <div className="dashboard-grid">

          {/* Add Election */}
          <div className="dashboard-box">
            <FaPoll size={40} color="#1d2671" />
            <h4>Add Election</h4>
            <button onClick={() => navigate("/add-election")}>
              Open
            </button>
          </div>

          {/* Add Candidate */}
          <div className="dashboard-box">
            <FaUserPlus size={40} color="#28a745" />
            <h4>Add Candidate</h4>
            <button onClick={() => navigate("/add-candidate")}>
              Open
            </button>
          </div>

          {/* Vote */}
          <div className="dashboard-box">
            <FaVoteYea size={40} color="#f39c12" />
            <h4>Vote</h4>
            <button onClick={() => navigate("/vote")}>
              Vote
            </button>
          </div>

          {/* Results */}
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
