import React, { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {axiosClient ,axiosSelling}  from "../../api/axios";




// async function login(userData, url) {
//   const response = await axios.post(url, userData, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return { data: response.data, status: response.status };
// }

function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from || "/";
  const [username, setusername] = useState("");
  const usernameRef = useRef();
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
      const userData2 = { username, password  };
      let response;
  
      if (role === "admin") {
        // response = await login(userData, "http://localhost:8080/admin/login");
      } else if (role === "user") {
        // response = await login(userData, "http://localhost:4000/signin");
        response = await axiosClient.post("/signin", userData);
      
        console.log("user logged in request : ", response);
      } else if (role === "company") {
        // response = await login(userData, "http://localhost:8080/company/login");
        response = await axiosSelling.post("/selling/login", userData2);
        // localStorage.setItem("token", response.data.token);
        // const token = jwt.sign({ id: 1, name: 'John Doe' }, 'mysecretkey');
        // const decoded = jwt.verify(token, 'mysecretkey');
        // console.log(decoded);
        // localStorage.setItem('token', token);

      }
  
      if (response.data.error) {
        setErrMsg(response.data.error);
      } else if (response.status === 200) {
       
        if (role === "admin") {
          navigate("/admin", { replace: true });
          setAuth({email,password,role});
        } else if (role === "user") {
          navigate("/user", { replace: true });
          setAuth({email,password,role});
        } else if (role === "company") {
          navigate("/company", { replace: true });
          setAuth({email,password,role});
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
    <label htmlFor="email">username</label>
    <input
    type="username"
    id="username"
    placeholder="Enter username"
    value={username}
    onChange={(event) => setusername(event.target.value)}
    required
    ref={usernameRef}
    />
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
    <option value="company">Company</option>

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