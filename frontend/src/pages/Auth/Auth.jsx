import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import log from '../../assets/login.png'
import "./Auth.css";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";


const Auth = () => {
  const [isSignup, setisSignup] = useState(false);
  const [isPhone, setisPhone] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setisSignup(!isSignup);
  };

  const handlePhoneSwitch = () => {
    setisPhone(!isPhone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      if (!phone) {
        alert("Enter your phone number");
      }
      dispatch(signup({ name, email, phone, password, pic}, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

 
   const postDetails = async (e) => {
     const file = e.target.files[0];
     const base64 = await convertToBase64(file);
     console.log(base64);
     setPic(base64);
   };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && <img src={log} alt="spider" className="login-logo" />}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          {(!isPhone || isSignup) && (
            <label htmlFor="email">
              <h4>Email</h4>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          )}

          {(isPhone || isSignup) && (
            <>
              <label htmlFor="phone">
                <h4>Phone</h4>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </label>

              {!isSignup && (
                <>
                  <label htmlFor="otp">
                    <h4>Otp</h4>
                    <input
                      type="number"
                      name="otp"
                      id="otp"
                      onChange={(e) => {}}
                    />
                  </label>
                </>
              )}
            </>
          )}
          {(!isPhone || isSignup) && (
            <label htmlFor="password">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Password</h4>

                {!isSignup && (
                  <p
                    style={{
                      color: "#76ABAE",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    forgot password?
                  </p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </label>
          )}
          {isSignup && (
            <label htmlFor="name">
              <h4>Upload Profile pic</h4>
              <input
                type="file"
                name="name"
                accept="image/*"
                onChange={(e) => {
                  postDetails(e);
                }}
              />
            </label>
          )}

          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>

          <br />
          {!isSignup && (
            <button
              type="button"
              className="handle-switch-btn"
              onClick={handlePhoneSwitch}
            >
              {isPhone ? "log in with email" : "Login with phone"}
            </button>
          )}
        </form>

        <p>
          {isSignup ? "already have an account?" : "Don't have an account?"}

          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
           
          >
            {isSignup ? "log in" : "sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;



function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}