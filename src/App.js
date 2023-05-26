import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagesOne from "./Pages/PagesOne";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PagesOne />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
