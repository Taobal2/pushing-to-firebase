import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Settings from "./Component/firebase/Settings";
import Base from "./Component/firebase/Base";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
