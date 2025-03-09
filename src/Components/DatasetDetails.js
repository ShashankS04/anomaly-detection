import React from "react";
import { useParams } from "react-router-dom";

const DatasetDetails = () => {
  const { datasetName } = useParams();

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-4">Dataset: {datasetName}</h2>
      <div className="flex flex-row items-start">
        <img
          src="/path-to-graph.png"
          alt="Graph"
          className="w-2/3 h-auto border rounded-lg"
        />
        <div className="ml-6 p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Select Features</h3>
          <div className="flex flex-col">
            <label>
              <input type="checkbox" className="mr-2" /> Feature 1
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Feature 2
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Feature 3
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetDetails;
