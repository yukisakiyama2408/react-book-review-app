import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
