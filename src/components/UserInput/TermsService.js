import React from "react";
import "./TermsService.css";

function TermsOfService({ checked, setChecked }) {
  return (
    <div className="tos">
      <label className="container">
        {" "}
        I agree to{" "}
        <a href="#" className="term">
          term of service
        </a>
        <input
          type={"checkbox"}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default TermsOfService;