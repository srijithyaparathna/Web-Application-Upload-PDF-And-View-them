# PDF Management Application

This project is a full-stack application for PDF file management, featuring user authentication, PDF uploading, and viewing functionalities. The backend is built using Node.js with Express, while the frontend is developed using React.

## Table of Contents
- [Features](#features)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

### Backend
- **User Authentication:**
  - Sign up, login, and logout functionalities.
  - Session management using JWT (JSON Web Token).
- **PDF Upload:**
  - API endpoint to upload PDF files.
  - Store PDF metadata in MongoDB and the file itself in local storage.
  - Validation to ensure only PDF files are uploaded and file size limits are adhered to.
- **PDF View:**
  - API endpoint to fetch and display uploaded PDFs.
- **Logging:**
  - Logging for all API requests using libraries like Winston or Morgan.
- **Data Tracing and Security:**
  - Methods to ensure the integrity and confidentiality of uploaded PDFs.
  - Encryption for storing sensitive data.
  - Role-based access control (RBAC) for secure data access.

### Frontend
- **Home Page:**
  - Form to upload PDF files.
  - List of uploaded PDFs with links to view each PDF.
  - Modern and user-friendly interface following new UI design trends.
- **PDF Viewer Page:**
  - Page to view the selected PDF using libraries like react-pdf.
  - Responsive and accessible design.
- **User Authentication:**
  - Sign up, login, and logout functionalities.
  - Route protection to ensure only authenticated users can upload and view PDFs.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB setup for storing PDF metadata.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
