import Signup from "./Signup";
import Login from "./Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import UploadPDF from './UploadPDF';
import ViewPDF from './ViewPDF';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadPDF/>} />
        <Route path="/view" element={<ViewPDF/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
