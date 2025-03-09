import React, { useState } from "react";
import Navbar from "./Nav";
import image from "./Screenshot 2025-03-09 at 1.39.35 AM.png";

const MultiChannelView = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const uploadedFiles = [
    { name: "steel_industry_data.csv", size: "2MB", date: "2025-03-08" },
    { name: "anomaly_detected_data.csv", size: "1.5MB", date: "2025-03-08" },
  ];

  return (
    <div className="uploaded-files-container">
      <Navbar />
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
          
    <div className="multi-channel-container">
      <div class="img-feature">
        <img class="img-style" src={image} alt="placeholder" />
      </div>
      <div class="feature-container">
        <h2>Features:</h2>
        <form action="">
        <input type="checkbox" id="feature1" name="feature1" value="Bike"/>
        <label for="feature1"> Feature 1</label><br/>
        <input type="checkbox" id="feature2" name="feature2" value="Car"/>
        <label for="feature2"> Feature 2</label><br/>
        <input type="checkbox" id="feature3" name="feature3" value="Boat"/>
        <label for="feature3"> Feature 3</label><br/><br/>
        <input type="submit" value="Submit"/>
        </form>
        </div>
    </div>
    </div>
  );
};

export default MultiChannelView;
