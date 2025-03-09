import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav";
import Home from "./Components/Home";
import DataIngestion from "./Components/DataIngestion";
import MultiChannelView from "./Components/MultiChannelView";
import Alert from "./Components/Alert";
import ModelTrain from "./Components/ModelTrain";

const App = () => {
  return (
    <Router>
      <div className="app-container">
      <Navbar />
      <div className="content-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-ingestion" element={<DataIngestion />} />
        <Route path="/multi-channel-view" element={<MultiChannelView />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/model-train" element={<ModelTrain />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;
