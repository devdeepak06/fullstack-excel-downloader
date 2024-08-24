import React from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const DownloadExcel = () => {
  const downloadFile = () => {
    axios({
      url: "http://localhost:5000/download", // URL of your API
      method: "GET",
      responseType: "blob", // Important: This ensures that the file is treated as a binary file
    })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(blob, "downloaded-file.xlsx"); // Replace with the desired file name
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Download Excel File</h1>
      <button
        onClick={downloadFile}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Download
      </button>
    </div>
  );
};

export default DownloadExcel;
