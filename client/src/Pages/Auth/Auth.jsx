import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section class='auth-section'>
      {isSignup && <AboutAuth />}
      <div class='auth-container-2'>
        {!isSignup && (
          <img src={icon} alt='StackOverflow' className='login-logo' />
        )}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor='name'>
              <h4>Display Name</h4>
              <input
                type='name'
                name='name'
                id='name'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}

          <label htmlFor='email'>
            <h4>Email</h4>
            <input
              type='email'
              name='email'
              id='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor='password'>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forget password ?
                </p>
              )}
            </div>
            <input
              type='password'
              name='password'
              id='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Password must contain atleast eight <br /> characters. including
                atleast 1 letter and 1 <br /> number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor='check'>
              <input type='checkbox' id='check' />
              <p style={{ fontSize: "13px" }}>
                Opt-in to recieve occasional <br /> product updates, user
                research invitations,
                <br /> company announcements and digests
              </p>
            </label>
          )}
          <button type='submit' className='auth-btn'>
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
        {isSignup && (
          <p style={{ color: "#666767", fontSize: "13px" }}>
            By clicking "Sign up", you agreee to our{" "}
            <span style={{ color: "#007ac6" }}>
              terms of <br /> service
            </span>
            ,<span style={{ color: "#007ac6" }}> privacy policy</span> and
            <span style={{ color: "#007ac6" }}> cookie policy</span>
          </p>
        )}

        <p>
          {isSignup ? "Already have an Account ?" : "Don't have an Account ?"}
          <button
            type='button'
            className='handle-switch-btn'
            onClick={handleSwitch}
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
