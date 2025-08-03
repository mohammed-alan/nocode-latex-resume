import { useState, useEffect } from "react";

export default function App() {
const [formData, setFormData] = useState({
  name: "Mohammed Al Ani",
  email: "mohd.otmn@gmail.com",
  phone: "+1 555-555-5555",
  linkedin: "mohammedalani.ca",
  education: [
    {
      school: "University of Waterloo",
      degree: "Bachelor of Applied Science in Mechatronics Engineering — GPA: 3.94/4",
      date: "Expected 2029",
    },
  ],
  experience: [
    {
      company: "Big Tech",
      website: "",
      role: "Software Engineer",
      date: "Feb. 2025 – Aug. 2025",
      bullets: [
        "Analyzed and cleaned large-scale industry datasets (200K+ rows) using *Python*, *Pandas*, and *NumPy* to uncover business insights",
        "Created interactive visualizations using *Matplotlib* and *Seaborn* to help clients understand operational trends and reduce inefficiencies",
        "Built automated data pipelines with *Python* that streamlined reporting workflows, saving clients 10+ hours per week",
        "Collaborated with product and sales teams to deliver data-backed insights that improved client retention by 15%",
      ],
    },
    {
      company: "Startup",
      website: "",
      role: "Firmware Engineer",
      date: "Oct. 2024 – Present",
      bullets: [
        "Developed firmware in *Python* (pySerial) and *C++* for real-time energy monitoring and optimization",
        "Integrated data logging scripts using *Python*, *Pandas*, *Matplotlib* to analyze energy trends",
        "Automated testing & debugging scripts in *Python* to identify issues in the power system, reducing errors by 30%",
        "Used *Git* for version control, ensuring efficient collaboration and maintaining comprehensive documentation",
      ],
    },
  ],
  projects: [
    {
      name: "Full Stack NLP Chat Bot",
      description:
        "Implemented *NLTK*-based natural language understanding (85% intent recognition accuracy) and integrated *spaCy*-based sentiment analysis (92% emotional tone accuracy). Developed with *Python*, *Flask*, *JavaScript*, and deployed a responsive web UI.",
    },
    {
      name: "CarPal – AI-Powered Car Image Analyzer",
      description:
        "Built full-stack AI image analyzer with *React*, *Express.js*, *Tailwind*, and *Google Gemini API*. Extracted car metadata from images, featured image previews, JWT auth, and animated dashboard (50+ users).",
    },
    {
      name: "Expressjs.Yourself – Blog Platform",
      description:
        "Lightweight *Express.js* blog system supporting 100+ posts. Used *JWT*, *bcrypt*, secure cookies, HTML sanitization, and dynamic post dashboard with *Tailwind CSS*.",
    },
    {
      name: "CurveFit Pro - Advanced Data Modeling",
      description:
        "Developed *Streamlit*-based tool for regression (linear, exponential, polynomial). Used *SciPy* & *NumPy* to analyze 10K+ data points from uploaded CSVs and generate visualizations.",
    },
  ],
  technicalSkills: [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "C++", "Java", "SQL", "MATLAB", "HTML/CSS"],
    },
    {
      title: "Frameworks/Libraries",
      skills: [
        "React",
        "NumPy",
        "Flask",
        "Django",
        "Node.js",
        "TensorFlow",
        "Pandas",
        "OpenCV",
        "SciPy",
        "Bootstrap",
      ],
    },
    {
      title: "Software & Tools",
      skills: [
        "Git",
        "Docker",
        "Jupyter",
        "Streamlit",
        "SPIKE Legacy",
        "Figma",
        "MS Azure",
        "CLion",
        "Spyder IDE",
        "Anaconda",
      ],
    },
    {
      title: "Office Tools",
      skills: [
        "MS Office Suite",
        "Google Workspace",
        "Slack",
        "MS Teams",
        "Report Writing",
        "Drafting",
        "Excel Sheets",
        "Power BI",
      ],
    },
  ],
});



  // Helper function to replace *bold* with \textbf{bold} in LaTeX
function replaceBoldMarkers(text) {
  if (!text) return "";

  // Escape LaTeX special characters first
  const escaped = text
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/([%$&#_^{}])/g, "\\$1")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");

  // Then apply bold formatting
  return escaped.replace(/\*(.+?)\*/g, "\\textbf{$1}");
}


  function generateLatex(data) {
    return `
\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage{tabularx}
\\usepackage[english]{babel}
\\input{glyphtounicode}
\\pagestyle{fancy}
\\fancyhf{}
\\setlength{\\tabcolsep}{0in}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}
\\urlstyle{same}
\\pdfgentounicode=1

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\newcommand{\\resumeItem}[1]{\\item\\small{#1\\vspace{-2pt}}}
\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
  \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & #2 \\\\
    \\textit{\\small#3} & \\textit{\\small #4}
  \\end{tabular*}\\vspace{-7pt}
}
\\newcommand{\\resumeProjectHeading}[2]{
  \\item
  \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
    \\small#1 & #2
  \\end{tabular*}\\vspace{-7pt}
}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}

\\begin{document}

% --- HEADER ---
\\begin{center}
  \\textbf{\\Huge \\scshape ${data.name}} \\\\ \\vspace{1pt}
  \\small ${data.phone} $|$ \\href{mailto:${data.email}}{\\underline{${data.email}}} $|$ 
  \\href{https://${data.linkedin}}{\\underline{${data.linkedin}}}
\\end{center}

% --- EDUCATION ---
${data.education && data.education.length > 0 ? `
\\section{Education}
\\resumeSubHeadingListStart
${data.education
  .map(
    (e) => `
  \\resumeSubheading
    {${replaceBoldMarkers(e.school)}}{${replaceBoldMarkers(e.date)}}
    {${replaceBoldMarkers(e.degree)}}{}
`
  )
  .join("\n")}
\\resumeSubHeadingListEnd 
` : ""}

% --- EXPERIENCE ---
${data.experience && data.experience.length > 0 ? `
\\section{Experience}
\\resumeSubHeadingListStart
${data.experience
  .map(
    (e) => `
  \\resumeSubheading
    {\\href{${e.website}}{${replaceBoldMarkers(e.company)}}}{${replaceBoldMarkers(e.date)}}
    {${replaceBoldMarkers(e.role)}}{}
    \\resumeItemListStart
      ${e.bullets.map((b) => `\\resumeItem{${replaceBoldMarkers(b)}}`).join("\n")}
    \\resumeItemListEnd
`
  )
  .join("\n")}
\\resumeSubHeadingListEnd
` : ""}

% --- PROJECTS ---
${data.projects && data.projects.length > 0 ? `
\\section{Projects}
\\resumeSubHeadingListStart
${data.projects
  .map(
    (p) => `
  \\resumeProjectHeading
    {\\textbf{${replaceBoldMarkers(p.name)}} $|$ \\emph{${p.skills?.length ? replaceBoldMarkers(p.skills.join(", ")) : ""}}}{}
    \\resumeItemListStart
      \\resumeItem{${replaceBoldMarkers(p.description)}}
    \\resumeItemListEnd
`
  )
  .join("\n")}
\\resumeSubHeadingListEnd
` : ""}

% --- TECHNICAL SKILLS ---

\\section{Technical Skills}
\\setlist[itemize]{itemsep=1pt, topsep=2pt, parsep=0pt, partopsep=0pt}
\\begin{itemize}[leftmargin=0.15in, label={}]
${data.technicalSkills
  .map(
    (section) =>
      `
  \\item \\textbf{${replaceBoldMarkers(section.title)}}: ${section.skills
        .map(replaceBoldMarkers)
        .join(", ")}
`
  )
  .join("\n")}
\\end{itemize}

\\end{document}
`;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch("http://localhost:5000/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tex: generateLatex(formData) }),
      })
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
        })
        .catch((err) => console.error("Error compiling PDF:", err));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [formData]);

  const [pdfUrl, setPdfUrl] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 space-y-6">
      <header className="w-full max-w-7xl flex flex-col items-center text-gray-100">
        <h1 className="text-4xl font-extrabold tracking-tight mb-1">Resume Builder</h1>
        <p className="text-indigo-400 underline cursor-pointer hover:text-indigo-600">
          <a
            href={`https://${formData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Check My Profile: {formData.linkedin}
          </a>
        </p>
      </header>

      <main className="flex w-full max-w-7xl flex-1 gap-6">
        {/* Editor Panel */}
        <div className="w-1/2 max-h-[110vh] overflow-y-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Resume Editor</h2>
          <p className="text-sm text-gray-400 mb-4">
  Use <span className="font-mono text-white">*</span>word<span className="font-mono text-white">*</span> to <span className="font-semibold text-white">bold</span> (e.g., <code className="bg-gray-700 px-1 rounded text-white">*Python*</code>)
</p>

          <div className="space-y-4">
            {["name", "email", "phone", "linkedin"].map((field) => (
              <input
                key={field}
                className="w-full border border-gray-700 bg-gray-900 text-gray-100 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-700"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
              />
            ))}
          </div>

          {/* Education */}
          <section className="mt-6">
            
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Education</h3>
            {formData.education.map((edu, idx) => (
              <div
                key={idx}
                className="space-y-2 border border-gray-700 bg-gray-900 p-3 rounded relative"
              >
                <button
                  onClick={() => {
                    const newEd = formData.education.filter((_, i) => i !== idx);
                    setFormData({ ...formData, education: newEd });
                  }}
                  className="absolute top-1 right-2 text-red-400 hover:text-red-600"
                  aria-label="Delete education"
                >
                  🗑️
                </button>
                <input
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="School"
                  value={edu.school}
                  onChange={(e) => {
                    const newEd = [...formData.education];
                    newEd[idx].school = e.target.value;
                    setFormData({ ...formData, education: newEd });
                  }}
                />
                <input
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => {
                    const newEd = [...formData.education];
                    newEd[idx].degree = e.target.value;
                    setFormData({ ...formData, education: newEd });
                  }}
                />
                <input
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="Date"
                  value={edu.date}
                  onChange={(e) => {
                    const newEd = [...formData.education];
                    newEd[idx].date = e.target.value;
                    setFormData({ ...formData, education: newEd });
                  }}
                />
              </div>
            ))}
            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  education: [...formData.education, { school: "", degree: "", date: "" }],
                })
              }
              className="mt-2 px-3 py-1 bg-indigo-700 text-white rounded hover:bg-indigo-800"
            >
              + Add Education
            </button>
          </section>

          {/* Experience */}
          <section className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Experience</h3>
            {formData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="space-y-2 border border-gray-700 bg-gray-900 p-3 rounded relative"
              >
                <button
                  onClick={() => {
                    const newExp = formData.experience.filter((_, i) => i !== idx);
                    setFormData({ ...formData, experience: newExp });
                  }}
                  className="absolute top-1 right-2 text-red-400 hover:text-red-600"
                  aria-label="Delete experience"
                >
                  🗑️
                </button>
                <input
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].company = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
                <input
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="Website (for hyperlink)"
                  value={exp.website || ""}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].website = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
                <input
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="Role"
                  value={exp.role}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].role = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
                <input
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="Date"
                  value={exp.date}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[idx].date = e.target.value;
                    setFormData({ ...formData, experience: newExp });
                  }}
                />
                <p className="font-semibold text-sm mt-2 text-gray-300">Bullets</p>
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex gap-2">
                    <input
                      className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                      placeholder={`Bullet ${bIdx + 1}`}
                      value={bullet}
                      onChange={(e) => {
                        const newExp = [...formData.experience];
                        newExp[idx].bullets[bIdx] = e.target.value;
                        setFormData({ ...formData, experience: newExp });
                      }}
                    />
                    <button
                      onClick={() => {
                        const newExp = [...formData.experience];
                        newExp[idx].bullets.splice(bIdx, 1);
                        setFormData({ ...formData, experience: newExp });
                      }}
                      className="text-red-400 hover:text-red-600"
                      aria-label="Delete bullet"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newExp = [...formData.experience];
                    newExp[idx].bullets.push("");
                    setFormData({ ...formData, experience: newExp });
                  }}
                  className="mt-1 px-2 py-1 bg-gray-700 text-gray-200 text-sm rounded hover:bg-gray-600"
                >
                  + Add Bullet
                </button>
              </div>
            ))}
            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  experience: [
                    ...formData.experience,
                    { company: "", website: "", role: "", date: "", bullets: [""] },
                  ],
                })
              }
              className="mt-2 px-3 py-1 bg-indigo-700 text-white rounded hover:bg-indigo-800"
            >
              + Add Experience
            </button>
          </section>

          {/* Projects */}
          <section className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">Projects</h3>
            {formData.projects.map((proj, idx) => (
  <div
    key={idx}
    className="space-y-2 border border-gray-700 bg-gray-900 p-3 rounded relative"
  >
    <button
      onClick={() => {
        const newProj = formData.projects.filter((_, i) => i !== idx);
        setFormData({ ...formData, projects: newProj });
      }}
      className="absolute top-1 right-2 text-red-400 hover:text-red-600"
      aria-label="Delete project"
    >
      🗑️
    </button>

    <input
      className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
      placeholder="Project Name"
      value={proj.name}
      onChange={(e) => {
        const newProj = [...formData.projects];
        newProj[idx].name = e.target.value;
        setFormData({ ...formData, projects: newProj });
      }}
    />

    <textarea
      className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
      placeholder="Description"
      value={proj.description}
      onChange={(e) => {
        const newProj = [...formData.projects];
        newProj[idx].description = e.target.value;
        setFormData({ ...formData, projects: newProj });
      }}
    />

    {/* Skills UI per project */}
    <p className="font-semibold text-sm mt-2 text-gray-300">Skills</p>
    <div className="flex flex-wrap gap-2 mb-2">
      {(proj.skills || []).map((skill, skillIdx) => (
        <div
          key={skillIdx}
          className="bg-gray-700 px-3 py-1 rounded flex items-center gap-2 text-gray-100"
        >
          <span>{skill}</span>
          <button
            onClick={() => {
              const newProj = [...formData.projects];
              newProj[idx].skills.splice(skillIdx, 1);
              setFormData({ ...formData, projects: newProj });
            }}
            className="text-red-400 hover:text-red-600"
          >
            ×
          </button>
        </div>
      ))}
    </div>

    <input
      className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
      placeholder="Add skill and press Enter"
      onKeyDown={(e) => {
        if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
          const newProj = [...formData.projects];
          if (!newProj[idx].skills) newProj[idx].skills = [];
          newProj[idx].skills.push(e.currentTarget.value.trim());
          setFormData({ ...formData, projects: newProj });
          e.currentTarget.value = "";
          e.preventDefault();
        }
      }}
    />
  </div>
))}

            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  projects: [...formData.projects, { name: "", description: "" }],
                })
              }
              className="mt-2 px-3 py-1 bg-indigo-700 text-white rounded hover:bg-indigo-800"
            >
              + Add Project
            </button>
          </section>

          {/* Technical Skills */}
          <section className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-200">
              Technical Skills
            </h3>

            {formData.technicalSkills.map((section, secIdx) => (
              <div
                key={secIdx}
                className="border border-gray-700 bg-gray-900 p-3 rounded mb-3 relative"
              >
                <button
                  onClick={() => {
                    const newSections = formData.technicalSkills.filter(
                      (_, i) => i !== secIdx
                    );
                    setFormData({ ...formData, technicalSkills: newSections });
                  }}
                  className="absolute top-1 right-2 text-red-400 hover:text-red-600"
                  aria-label="Delete skills section"
                >
                  🗑️
                </button>

                <input
                  className="w-full mb-2 p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="Section Title (e.g. Languages)"
                  value={section.title}
                  onChange={(e) => {
                    const newSections = [...formData.technicalSkills];
                    newSections[secIdx].title = e.target.value;
                    setFormData({ ...formData, technicalSkills: newSections });
                  }}
                />

                <div className="flex flex-wrap gap-2 mb-2">
                  {section.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="bg-gray-700 px-3 py-1 rounded flex items-center gap-2 text-gray-100"
                    >
                      <span>{skill}</span>
                      <button
                        onClick={() => {
                          const newSections = [...formData.technicalSkills];
                          newSections[secIdx].skills.splice(skillIdx, 1);
                          setFormData({ ...formData, technicalSkills: newSections });
                        }}
                        className="text-red-400 hover:text-red-600"
                        aria-label="Delete skill"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  className="w-full p-2 border border-gray-700 bg-gray-800 text-gray-100 rounded"
                  placeholder="Add skill and press Enter"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                      const newSections = [...formData.technicalSkills];
                      newSections[secIdx].skills.push(e.currentTarget.value.trim());
                      setFormData({ ...formData, technicalSkills: newSections });
                      e.currentTarget.value = "";
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            ))}

            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  technicalSkills: [...formData.technicalSkills, { title: "", skills: [] }],
                })
              }
              className="mt-2 px-3 py-1 bg-indigo-700 text-white rounded hover:bg-indigo-800"
            >
              + Add Skills Section
            </button>
          </section>
        </div>

        {/* PDF Preview */}
        <div className="w-3/5 max-h-[250vh] bg-gray-900 p-1 rounded-lg shadow-lg overflow-hidden flex flex-col">
          <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">PDF Preview</h2>
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              title="PDF Preview"
              className="w-full flex-1 rounded border border-gray-700"
              style={{ minHeight: 0 }}
            />
          ) : (
            <p className="text-gray-400 text-center mt-10">Compiling LaTeX...</p>
          )}
        </div>
      </main>
    </div>
  );
}
