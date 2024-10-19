# Project Submission App

This is a MERN stack-based web application designed to streamline the project submission process for students. Instead of the traditional method previously used at my workplace, this app allows students to submit their web projects easily, view a countdown to the submission deadline, and explore other submitted projects.

Live Preview: [Project Submission App](https://deadline-submission-app-mer-nstack.vercel.app/)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Project Overview

The **Project Submission App** is a modern approach to handling the submission of student projects. This tool simplifies the submission process, helping students submit their work in a standardized format, and provides a user-friendly interface for both submitting and reviewing projects. In addition to project submission, the app features a countdown timer to track the deadline for each submission cycle.

This project is **open for improvements and suggestions**, so feel free to contribute or suggest new features.

## Features

- **Countdown Timer**: Displays the time remaining until the submission deadline.
- **Project Submission Form**: Students can submit their projects with details such as:
  - Project title
  - Short description
  - Name of the submitter
  - Live project preview link
  - GitHub repository link
- **View Submitted Projects**: Users can browse all submitted projects in a table, with the option to view more details about each project.
- **Project Details Popup**: A well-organized presentation of project details, including links to the live preview and GitHub code.

## Technologies Used

- **Frontend**: React, React Router, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Hosting**:
  - Frontend: Vercel
  - Backend: Render
- **Other Tools**: Axios (for API calls), dotenv (for environment variables)

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** installed.
- **MongoDB** (local or cloud-based via MongoDB Atlas).

### Backend Setup

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone <your-repo-url>
   cd your-repo
   ```

2. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

3. Install the backend dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add the following environment variables:

   ```bash
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

3. If you need to configure environment variables (e.g., for the backend API URL), add them to a `.env` file at the root of the `frontend` folder:

   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

- **Home Page**: Displays a countdown timer to the submission deadline with buttons to submit new projects or view previously submitted projects.
- **Submit Project**: Clicking the "Click to Submit Project" button opens a form where students can fill in the required fields and submit their projects.

- **View Submitted Projects**: The "Click to See Other Submitted Projects" button shows a table of submitted projects. Users can click "View" to see detailed information about the project, including buttons to visit the live preview or GitHub repository.

## Contribution

This project is open for contributions, improvements, and suggestions. If you would like to add a feature or improve the existing codebase, feel free to submit a pull request or open an issue.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to your branch (`git push origin feature-branch`).
6. Open a pull request.

All contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
