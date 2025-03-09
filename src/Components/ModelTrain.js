import React from "react";
import Navbar from "./Nav";

const ModelTrain = () => {
    const uploadedFiles = [
      { name: "Dataset1.csv", size: "2MB", date: "2025-03-08" },
      { name: "Dataset2.csv", size: "1.5MB", date: "2025-03-08" },
    ];
  
    return (
      <div className="uploaded-files-container">
        <Navbar />
        <div className="content-container">
          <h2>Uploaded Files</h2>
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Size</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {uploadedFiles.map((file, index) => (
                <tr key={index}>
                  <td>{file.name}</td>
                  <td>{file.size}</td>
                  <td>{file.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <h2>Model Selection</h2>
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>Model Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="radio" name="model" value="Model1" />
                </td>
                <td>Model 1</td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="model" value="Model2" />
                </td>
                <td>Model 2</td>
              </tr>
            </tbody>
          </table>
          <button className="train-button">Train</button>
        </div>
      </div>
    );
  };

  export default ModelTrain;