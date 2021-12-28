import React, { useState, useEffect } from "react";
import axios from "axios";

const GetOtpHandler = () => {
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [otp, setOpt] = useState("");

  let url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

  const getOtp = () => {
    axios.get(url + name).then((response) => {
      setOpt(response.data.otp);
      // console.log(response);
    });
    // console.log({ name });
  };

  return (
    <div>
      <h2>Submit your name to get the OTP</h2>
      <label>NAME:</label>
      <input
        type="text"
        placeholder="Write your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={getOtp}>GET OTP</button>
      <h1>{otp}</h1>
      <h2>SUBMIT OTP</h2>
      <label>OTP:</label>
      <input type="text" placeholder="submit your OTP" />
    </div>
  );
};

export default GetOtpHandler;
