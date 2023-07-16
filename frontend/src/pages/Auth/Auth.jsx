import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import log from '../../assets/login.png'

// import '../../firebase/firebase'
// import { getAuth,signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

import "./Auth.css";
// import icon from '../../assets/logo.png'
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
// import { logIn } from '../../api';

const Auth = () => {
  const [isSignup, setisSignup] = useState(false);
  const [isPhone, setisPhone] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  // const [otp, setOtp] = useState();
  const [password, setPassword] = useState("");
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
      dispatch(signup({ name, email, phone, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  //////

  // const configureCaptcha = () => {
  //   const auth = getAuth();
  //   window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  //     'size': 'invisible',
  //     'callback': (response) => {
  //     onSignInSubmit();
  //     },
  //     defaultCountry:"IN"
  //   }, auth);
  // }

  // const onSignInSubmit = (e) => {
  //     e.preventDefault()
  //     if(phone.length !== 10){
  //       alert("Enter Valid Phone Number")
  //     }

  //     const phoneNumber = "+91" + phone

  //     try{
  //       configureCaptcha();
  //       const appVerifier = window.recaptchaVerifier;

  //       const auth = getAuth();
  //       signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //       .then((confirmationResult) => {
  //       window.confirmationResult = confirmationResult;

  //     })
  //     }

  //     catch(error) {
  //       console.log(error)
  //   console.log("SMS not sent")
  //     };
  // }
  // const onSubmitOtp = (e) => {
  //     e.preventDefault()
  //     try{
  //       const code = otp

  //       window.confirmationResult.confirm(code).then((result) => {
  //       const user = result.user;
  //       alert("User is Verified");
  //       dispatch(logIn(phone,navigate))
  //       })
  //     }
  //       catch(error){
  //         alert("Enter valid Phone Number")

  //     };

  // }

  //////
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

              {(!isSignup) && (
                <>
                  <label htmlFor="otp">
                    <h4>Otp</h4>
                    <input
                      type="number"
                      name="otp"
                      id="otp"
                      onChange={(e) => {
                        // setOtp(e.target.value);
                      }}
                    />
                  </label>
                  
                </>
              )}
            </>
          )}
          {(!isPhone || isSignup) && (
            <label htmlFor="password">
              <div style={{display:"flex",justifyContent:'space-between'}}>
                <h4>Password</h4>
                
                {!isSignup && (
                  <p
                    style={{
                      color: "#007ac6",
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
