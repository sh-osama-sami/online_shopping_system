import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { axiosClient, axiosSelling } from "../../api/axios";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const Email_REGEX = /^[A-z][A-z0-9-_]{3,23}@[A-z0-9-_]{3,23}\.[A-z]{2,3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

async function signup(userData, url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return { data, status: response.status };
}

function Signup() {
  const emailRef = useRef();
  const errRef = useRef();
  const { setAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [role, setRole] = useState("admin");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const [address, setAddress] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidEmail(Email_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setAddress(address);
  }, [address]);
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, confirmPassword]);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    // Client-side validation
    const v1 = Email_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      setSuccess(false);
      return;
    } else {
      setSuccess(true);
      console.log(email);
      console.log(password);
      console.log(role);

      try {
        const userData = { email, password, role };
        const userData2 = { email, password, role ,address };

        let response;
        let response2;
        if (role === "admin") {
          // response = await signup(userData, "http://localhost:8080/admin/signup");
        } else if (role === "user") {
          // response = await signup(userData, "http://localhost:4000/signup");
          response = await axiosClient.post("/signup", userData2);
          response2 = await axiosClient.post("/signin", userData);

          console.log("user signed request : ", response);
          console.log("user login request : ", response2);
        } else if (role === "company") {
          response = await axiosSelling.post("/signup", userData);

          response2 = await axiosSelling.post("/signin", userData);
          const token = response2.data.token;
          localStorage.setItem("token", token);
        }
        if (response.data.code === 500) {
          setErrMsg("Username is already taken");
          setSuccess(false);
        } else {
          if (role === "admin") {
            navigate("/admin", { replace: true });
            setAuth({ email, password, role });
          } else if (role === "user") {
            navigate("/user", { replace: true });
            setAuth({ email, password, role });
            console.log("user signed up here");
          } else if (role === "company") {
            navigate("/company", { replace: true });
            setAuth({ email, password, role });
          }
        }
      } catch (error) {
        // Show an error message
        console.error("Signup failed:", error.message);
        setErrMsg("Signup failed");
        setSuccess(false);
      }
    }
  };

  return (
    <>
      {/* {success ? (
        
    
       

        
      ) : ( */}
      <div className="signup-container">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h2>Create an account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="email">
              Email address :
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              />
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <p
              id="uidnote"
              className={email && !validEmail ? "instructions" : "offscreen"}
            >
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPassword || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <p
              id="pwdnote"
              className={
                password && !validPassword ? "instructions" : "offscreen"
              }
            >
              8 to 24 characters.
              <br />
              Must contain at least one uppercase letter, one lowercase letter,
              one number, and one special character.
            </p>
            <div className="form-group">
              <label htmlFor="role">Role: </label>
              <select
                className="form-control"
                id="role"
                value={role}
                onChange={(event) => {
                  setRole(event.target.value);
                }}
              >
                <option value="admin">admin</option>
                <option value="user">user</option>
                <option value="company">company</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm password :
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validConfirmPassword && confirmPassword ? "valid" : "hide"
                }
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={
                  validConfirmPassword || !confirmPassword ? "hide" : "invalid"
                }
              />
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
            <p
              id="confirmnote"
              className={!validConfirmPassword ? "instructions" : "offscreen"}
            >
              Must match the first password input field.
            </p>
            {role === "user" && (
              <div className="form-group">
                <label htmlFor="address">Address: </label>
                <input
                  className="form-control"
                  id="address"
                  type="text"
                  placeholder="Enter address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
            )}
          </div>
          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>
        <p>
          Already registered?
          <br />
          <span className="line">
            {/*put router link here*/}
            <a href="/login">Sign In</a>
          </span>
        </p>
      </div>
      {/* )} */}
    </>
  );
}

export default Signup;
