import React, { useState } from "react";

const DataIngestion = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      date: new Date().toLocaleDateString(),
    }));

    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          id="fileUpload"
          hidden
        />
        <label className="upload-label"
          for="fileUpload"
        >
          Bulk Import
        </label>
        <div className="upload-container">  
          <h2 className="upload">Uploaded Files</h2>
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Size</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index} className="text-center">
                  <td>{file.name}</td>
                  <td>{file.size}</td>
                  <td>{file.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataIngestion;
