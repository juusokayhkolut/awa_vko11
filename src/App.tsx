import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import SavedPage from "./components/SavedPage";
import useJokes from "./hooks/useJokes";

const App: React.FC = () => {
  const jokeManager = useJokes();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage {...jokeManager} />} />
        <Route path="/saved" element={<SavedPage {...jokeManager} />} />
      </Routes>
    </Router>
  );
};

export default App;