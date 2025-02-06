const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "jobs.json";

const readJobsFromFile = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeJobsToFile = (jobs) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(jobs, null, 2));
};

let jobs = readJobsFromFile(); 
app.get("/jobs", (req, res) => {
  res.json(jobs);
});

app.post("/jobs", (req, res) => {
  const { owner, title, description, offer } = req.body; 
  const newJob = {
    id: Date.now(),
    owner,
    worker: null,
    title,
    description,
    workpool: [],
    offer: offer || null,
  };
  jobs.push(newJob);
  writeJobsToFile(jobs); 
  res.status(201).json(newJob);
});

app.post("/jobs/:id/apply", (req, res) => {
    const { walletAddress } = req.body;
    const jobIndex = jobs.findIndex((j) => j.id === parseInt(req.params.id));
  
    if (jobIndex === -1) {
      return res.status(404).json({ message: "Job not found" });
    }
  
    if (!walletAddress) {
      return res.status(400).json({ message: "Wallet address is required" });
    }
  
    if (jobs[jobIndex].workpool.includes(walletAddress)) {
      return res.status(400).json({ message: "You have already applied for this job" });
    }
  
    jobs[jobIndex].workpool.push(walletAddress);
  
    writeJobsToFile(jobs);
  
    res.json({ message: "Applied successfully", job: jobs[jobIndex] });
  });
  
  

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
