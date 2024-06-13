import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleAdminCheck = (e) => {
    if (e.target.checked) {
      const shouldPromote = window.confirm(
        "Are you sure you want to register as an admin?"
      );
      if (shouldPromote) {
        setRole("admin");
        console.log("Role set to admin:", "admin");
      } else {
        // Uncheck the checkbox if the user cancels the action
        e.target.checked = false;
        setRole("visitor");
        console.log("Role set to visitor:", "visitor");
      }
    } else {
      setRole("visitor");
      console.log("Role set to visitor:", "visitor");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:3001/auth/register", {
        name,
        email,
        password,
        role,
      })
      .then(() => {
        alert("Registered Successfully");
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          alert(err.response.data.error); // Display the server error message
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="full-background">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white p-4 rounded" style={{ width: "400px" }}>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="adminCheck"
                onChange={handleAdminCheck}
              />
              <label className="form-check-label" htmlFor="adminCheck">
                Register as Admin
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
            <p className="mt-3 text-center">Already Have an Account?</p>
            <Link
              to="/login"
              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
