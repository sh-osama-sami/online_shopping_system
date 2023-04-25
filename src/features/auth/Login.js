import React, { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(password, email);
    setEmail("");
    setPassword("");
    setSuccess(true);

    const role = "admin";

    if (role === "admin") {
    setAuth({  email,  password , role  });
    navigate('/admin' , {replace: true});
    }
    else if (role ==="user") {
    setAuth({  email,  password , role  });
    navigate('/user' , {replace: true});
    }
    else if (role === "company") {
    setAuth({  email,  password , role  });
    navigate('/company' , {replace: true});
    }

    // const response = await axios.post(LOGIN_URL,
    //             JSON.stringify({ user, pwd }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data));
    //         //console.log(JSON.stringify(response));
    //         const accessToken = response?.data?.accessToken;
    //         const roles = response?.data?.roles;
    //         setAuth({ user, pwd, roles, accessToken });
    //         setUser('');
    //         setPwd('');
    //         setSuccess(true);
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 400) {
    //             setErrMsg('Missing Username or Password');
    //         } else if (err.response?.status === 401) {
    //             setErrMsg('Unauthorized');
    //         } else {
    //             setErrMsg('Login Failed');
    //         }
    //         errRef.current.focus();
  };

  return (
    <>
      {/* {success ? (
        <div>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </div>
      ) : ( */}
        <div className="login-container">
          <h2>Login to your account</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
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
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="/">Sign Up</a>
            </span>
          </p>
        </div>
      {/* )} */}
    </>
  );
}

export default Login;
