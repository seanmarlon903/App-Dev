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
            Inventory <br /> management <br /> system
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
        <div className="container">
          <h2>Admin Dashboard</h2>
          <button className="btn" onClick={() => setPage("home")}>
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
