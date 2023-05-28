import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {

  
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element= {<Single/>} />
      </Routes>
    </Router>
  );
}

export default App;
