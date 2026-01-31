import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import AddElection from "./components/AddElection";
import AddCandidate from "./components/AddCandidate";
import Vote from "./components/Vote";
import Result from "./components/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/add-election" element={<AddElection />} />
        <Route path="/add-candidate" element={<AddCandidate />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
