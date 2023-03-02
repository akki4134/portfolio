import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="main">
      <div className="container-left">
        <div className="container-1">
          <div className="container-2">
            <div className="domain-text">Full</div>
            <div className="domain-text">-</div>
            <div className="domain-text">Stack</div>
          </div>
          <div className="container-3">
            <div className="domain-text">Devloper</div>
          </div>
        </div>
        <div className="sub-text">
          I'm Akhil, I'm a passionate Web and Mobile App Developer.
        </div>
        <br />
        <div className="sub-text">
          Web Technologies :: React, MaterialUI
          {/* NodeJS, Python, MongoDB, AWS,
          CI-CD, API's, Web Security. */}
        </div>
      </div>
      <div className="container-right">
        <div className="container-4">
          <div className="shape">Projects</div>
          <div className="shape">Designs</div>
          <div className="shape">About</div>
          <div className="shape">Blog</div>
        </div>
      </div>
    </div>
  );
}
