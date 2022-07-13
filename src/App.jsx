import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import "./index.css"
import "./styles/Login.css"
import "./styles/Signup.css"
import "./styles/Banner.css"
import "./styles/Row.css"
import "./styles/Profile.css"

import Profile from "./pages/Profile";
import Footer from "./components/Footer";


const NotFound = () => <div><h1 style={{ color: "white" }}>URL not found</h1><p><a href="/" style={{ color: "white"}}>Go Home</a></p></div>

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </>
  )
}

export default App
