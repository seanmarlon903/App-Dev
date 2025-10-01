import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      setPage("admin");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="App">
      {/* Home Page */}
      {page === "home" && (
        <div className="container">
          <h1>
            Inventory <br /> Management <br /> System
          </h1>
          <button className="btn" onClick={() => setPage("login")}>
            Admin Login
          </button>
          <div className="footer">
            Sean Marlon Boton, Luisa Caneza, Glyza Delfin, Chris Joseph Mananes
          </div>
        </div>
      )}

      {/* Login Page */}
      {page === "login" && (
        <div className="container">
          <h2>Login Page</h2>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
          <button className="btn" onClick={() => setPage("home")}>
            Back
          </button>
          <p style={{ color: "white" }}>
            user: <b>admin</b> <br />
            password: <b>admin123</b>
          </p>
        </div>
      )}

      {/* Admin Dashboard */}
      {page === "admin" && (
        <div className="App">
          {/* Sidebar */}
          <div className="sidebar">
            <h2>Admin</h2>
            <ul>
              <li onClick={() => alert("Dashboard Clicked")}>Dashboard</li>
              <li onClick={() => alert("Calendar Clicked")}>Calendar</li>
              <li onClick={() => alert("Inbox Clicked")}>Inbox</li>
              <li onClick={() => alert("Tasks Clicked")}>Tasks</li>
              <li onClick={() => alert("Profile Clicked")}>Profile</li>
              <li onClick={() => setPage("home")}>Logout</li>
            </ul>
          </div>

          {/* Dashboard Content */}
          <div className="dashboard">
            <h1>Welcome Back, Admin</h1>

            <div className="card">
              <h2>This Week Income</h2>
              <p>$1250</p>
            </div>

            <div className="card">
              <h2>Recent Orders</h2>
              <p>📦 Order #123098 - Completed</p>
              <p>📦 Order #123099 - In Progress</p>
              <p>📦 Order #123100 - Denied</p>
            </div>

            <div className="card">
              <h2>Recent Comments</h2>
              <p>💬 Mark Hamilton: Lorem ipsum dolor sit amet...</p>
              <p>💬 Thomas Gold: Duis aute irure dolor in...</p>
            </div>

            <div className="footer">© 2025 Admin Dashboard</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
