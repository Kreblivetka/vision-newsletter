import React from "react";
import "./InputField.css";
import arrow from "../../assets/arrowBtn/arrow.svg";

function InputField({ email, setEmail, errorMessage, clickHandler }) {
  return (
    <div className={errorMessage ? "inputBase errorInputBase" : "inputBase"}>
      <div className={errorMessage ? "line errorLine" : "line"}>
        <input
          className="placeholder"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type={"email"}
          placeholder={"Type your email address here..."}
        ></input>
        <button className="button" onClick={clickHandler}>
          <img className="arrow" src={arrow} alt="long-arrow-right" />
        </button>
      </div>
      <span className="err">{errorMessage}</span>
    </div>
  );
}

export default InputField;