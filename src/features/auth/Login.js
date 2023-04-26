import React, { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

async function login(userData, url) {
  const response = await axios.post(url, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return { data: response.data, status: response.status };
}

function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const userData = { email, password };
      let response;
  
      if (role === "admin") {
        // response = await login(userData, "http://localhost:8080/admin/login");
      } else if (role === "user") {
        response = await login(userData, "http://localhost:4000/signin");
        console.log("user logged in request : ", response);
      } else if (role === "company") {
        // response = await login(userData, "http://localhost:8080/company/login");
      }
  
      if (response.data.error) {
        setErrMsg(response.data.error);
      } else if (response.status === 200) {
        setAuth({ email, password , role});
  
        if (role === "admin") {
          navigate("/admin", { replace: true });
        } else if (role === "user") {
          navigate("/user", { replace: true });
        } else if (role === "company") {
          navigate("/company", { replace: true });
        }
      } else {
        setErrMsg("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      setErrMsg("Login failed");
    }
  };
  
  return (
    <>
    <div className="login-container">
    <h2>Login to your account</h2>
    <form onSubmit={handleLogin}>
    <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input
    type="email"
    id="email"
    placeholder="Enter email"
    value={email}
    onChange={(event) => setEmail(event.target.value)}
    required
    ref={emailRef}
    />
    </div>
    <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
    type="password"
    id="password"
    placeholder="Enter password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    required
    />
    </div>
    <div className="form-group">
    <label htmlFor="role">Role</label>
    <select
    id="role"
    value={role}
    onChange={(event) => setRole(event.target.value)}
    required
    >
    <option value="">Select Role</option>
    <option value="admin">Admin</option>
    <option value="user">User</option>
    </select>
    </div>
    <button type="submit" className="login-btn">
    Login
    </button>
    </form>
    <p>
    Need an Account?
    <br />
    <span className="line">
    <Link to="/">Sign Up</Link>
    </span>
    </p>
    </div>
    </>
    );
    }
    
    export default Login;