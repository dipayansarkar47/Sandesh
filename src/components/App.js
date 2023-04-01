import React from "react"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Login";
import Chats from "./Chats";

import { AuthProvider } from "../contexts/AuthContext"



function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/chats" element={<Chats/>} /> 
            <Route path="/" element={<Login/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
