// server.js
const express = require("express");
const path = require("path");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 5000;

// Enable CORS for all routes and origins
app.use(cors());

app.get("/api/download", (req, res) => {
  const filePath = path.join(__dirname, "files", "example.xlsx"); // Path to your Excel file
  res.download(filePath, "example.xlsx", (err) => {
    if (err) {
      console.error("Error while sending file:", err);
      res.status(500).send("Error downloading the file");
    }
  });
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
