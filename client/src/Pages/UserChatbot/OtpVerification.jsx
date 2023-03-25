import React from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import "./Chat.css";
import Chat from "./Chat";

import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className='otp-verification-container'>
      {" "}
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id='recaptcha-container'></div>{" "}
        {user ? (
          <h2 className='chatbot-container'>
            <Chat />
          </h2>
        ) : (
          <div className='otp-verification-box card-blue'>
            <h1 className='title'>Chatbot</h1>
            {showOTP ? (
              <>
                <div className='logo-1'>
                  <BsFillShieldLockFill size={30} />
                </div>
                <label htmlFor='otp' className='title-1'>
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType='number'
                  disabled={false}
                  autoFocus
                  className='otp-container '
                ></OtpInput>
                <button onClick={onOTPVerify} className='otp-btn'>
                  {loading && <CgSpinner size={20} className='spinner' />}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className='logo-1'>
                  <BsTelephoneFill size={30} />
                </div>
                <label htmlFor='' className='title-1'>
                  Verify your phone number
                </label>
                <PhoneInput
                  country={"in"}
                  value={ph}
                  className='phn-input'
                  onChange={setPh}
                />
                <button onClick={onSignup} className='otp-btn'>
                  {loading && <CgSpinner size={20} className='spinner' />}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OtpVerification;

// import React from "react";
// import Chat from "./Chat";
// import "./Chat.css";

// const OtpVerification = () => {
//   return (
//     <div className='chatbot-container'>
//       <Chat />
//     </div>
//   );
// };

// export default OtpVerification;
