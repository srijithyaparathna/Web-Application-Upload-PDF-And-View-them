import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/auth/login', { email, password })
      .then(res => {
        const token = res.data.token; // Assuming the response data has a token field
        
        // Store the token in local storage
        localStorage.setItem('token', token);

        if (res.data.status === 'Success') {
          if (res.data.role === 'admin') {
            alert('Login Successful as Admin');
            navigate('/dashboard');
          } else {
            alert('Login Successful as User');
            navigate('/dashboard');
          }
        }
      })
      .catch(err => alert(JSON.stringify(err.response.data)));
  };

  return (
    <div className="full-background">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white p-4 rounded" style={{ width: "400px" }}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
            <p className="mt-3 text-center">Already Have an Account?</p>
            <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
