# NoCode LaTeX Resume

A web-based interactive LaTeX resume editor built with React for the frontend and Node.js for the backend. It allows users to dynamically edit their resume sections through a user-friendly interface and generates a professional PDF using LaTeX on the server side without having to edit any LaTeX "code".

---

## Features

- **Dynamic Resume Editing:** Add, edit, and delete sections such as Education, Experience, Projects, and Technical Skills.
- **Live PDF Preview:** Generates a real-time PDF preview from the LaTeX source on the backend.
- **Modern Web Stack:** Built with React and Node.js, ensuring smooth client-server communication.

---

## Technologies Used

- **Frontend:**
  - React (with hooks like `useState`, `useEffect`)
  - Vite as the frontend build tool
  - JSX and TaildwindCSS for UI components and styling

- **Backend:**
  - Node.js and Express for API server
  - Child process execution to compile LaTeX documents into PDF
  - LaTeX installed on the backend machine (e.g., TeX Live or MikTeX)

---



## Getting Started / Setup Instructions

### Prerequisites

- **Node.js and npm/yarn** installed on your machine
- **LaTeX distribution** installed (e.g., [TeX Live](https://www.tug.org/texlive/) for Linux/macOS or [MikTeX](https://miktex.org/) for Windows)

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/mohammed-alan/nocode-latex-resume.git
cd nocode-latex-resume
```
Install backend dependencies

```bash
cd backend
npm install
```
Install frontend dependencies
Open a new terminal window or tab:

```bash
cd frontend
npm install
```
Run the backend server

```bash
cd backend
node index.js
```
The backend will start on http://localhost:5000 (or configured port).

Run the frontend

```bash
cd frontend
npm run dev
```
The React app will start on http://localhost:3000 (or the Vite default).

## Usage
Open the frontend URL in your browser.

Use the interactive form to add or modify resume sections.

The LaTeX source updates dynamically and the backend compiles it to PDF.

A live preview of the generated PDF is displayed.

## Notes
Make sure LaTeX is properly installed and accessible in your system PATH for the backend to compile PDFs.

The backend temporarily stores LaTeX build files in ```backend/latex_build``` which is ignored from Git.

Customize the LaTeX template in ```backend/resume.tex``` to fit your preferred style.

## Author
Mohammed Othman Al Ani


---


<img width="1905" height="815" alt="Screenshot 2025-08-03 201309" src="https://github.com/user-attachments/assets/c9987523-6d0e-4f30-8a63-4519ae0c3e8b" />






