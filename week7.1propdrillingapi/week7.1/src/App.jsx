import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
//import { Dashboard } from "./Components/Dashboard";
import { Suspense, lazy } from "react";
//Lazy Loading

const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const Landing = React.lazy(() => import("./Components/Landing"));
import { Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
   
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback = {"loading..."}><Dashboard /> </Suspense>}></Route>
          <Route path="/" element={<Suspense fallback = {"loading..."}> <Landing /></Suspense> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard</button>
    </div>
  );
}

export default App;
