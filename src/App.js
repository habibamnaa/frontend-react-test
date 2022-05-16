import React from "react";

import Login from './components/auth/Login'
import Dashboard from "./components/Dashboard";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router >
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
