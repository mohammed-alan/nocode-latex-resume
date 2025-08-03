import express from "express";
import fs from "fs";
import { exec } from "child_process";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const PORT = 5000;

// Enable CORS for all origins for dev; restrict in production
app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));

app.post("/compile", (req, res) => {
  const tex = req.body.tex;
  if (!tex) {
    return res.status(400).send("Missing 'tex' in request body");
  }

  // Use absolute paths for safety
  const workDir = path.resolve("./latex_build");
  if (!fs.existsSync(workDir)) {
    fs.mkdirSync(workDir);
  }
  const texPath = path.join(workDir, "resume.tex");
  const outputPdfPath = path.join(workDir, "resume.pdf");

  // Clean up old files before writing new ones
  const auxFiles = ["resume.aux", "resume.log", "resume.out", "resume.pdf"];
  auxFiles.forEach(file => {
  const filePath = path.join(workDir, file);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (e) {
    // Ignore "resource busy" errors, log others
    if (e.code !== 'EBUSY' && e.code !== 'EPERM' && e.code !== 'ENOENT') {
      console.error(`Error deleting file ${filePath}:`, e);
    }
  }
});

  // Write the tex file
  fs.writeFileSync(texPath, tex);

  // Run pdflatex in the working directory
  exec(`pdflatex -interaction=nonstopmode -halt-on-error resume.tex`, { cwd: workDir }, (err, stdout, stderr) => {
    if (err || !fs.existsSync(outputPdfPath)) {
      console.error("LaTeX compilation error:", stderr);
      return res.status(500).send("LaTeX compilation failed:\n" + stderr);
    }

    // Read and send back PDF file
    try {
      const pdfBuffer = fs.readFileSync(outputPdfPath);
      res.setHeader("Content-Type", "application/pdf");
      res.send(pdfBuffer);
    } catch (readErr) {
      console.error("Error reading PDF file:", readErr);
      res.status(500).send("Failed to read generated PDF");
    }
  });
});

app.listen(PORT, () => {
  console.log(`LaTeX compiler server running at http://localhost:${PORT}`);
});
