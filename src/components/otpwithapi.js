import React, { useState, useEffect } from "react";
import axios from "axios";

const GetOtpHandler = () => {
  const [name, setName] = useState("");
  const [submitOtp, setSubmitOtp] = useState("");
  const [otp, setOpt] = useState("");
  const [output, setOutput] = useState(null);

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
      <input
        type="text"
        placeholder="submit your OTP"
        value={submitOtp}
        onChange={(e) => {
          setSubmitOtp(e.target.value);
        }}
      />
      <button
        onClick={() => {
          otp === submitOtp
            ? setOutput(<h1>Correct OTP</h1>)
            : setOutput("Wrong OTP");
        }}
      >
        CHECK
      </button>
      {output}
    </div>
  );
};

export default GetOtpHandler;
