import React from "react";

const Home = () => (
  <div>
    <div>
      <div class="button-container">
      <button class="button" onClick={() => (window.location.href = '/data-ingestion')}>Data Ingestion</button>
        <button class="button" onClick={() => (window.location.href = '/multi-channel-view')}>Multichannel View</button>
        <button class="button" onClick={() => (window.location.href = '/model-train')}>Model Training</button>
        <button class="button" onClick={() => (window.location.href = '/alert')}>Alerts</button>
        <button class="button" >Model Testing</button>
        <button class="button">FMEA</button>
      </div>
    </div>
  </div>
);

export default Home;
