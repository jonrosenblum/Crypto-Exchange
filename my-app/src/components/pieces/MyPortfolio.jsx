import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyPortfolio() {
  return (
    <div className="my-portfolio-container container my-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Sign up Today</h1>
          <h2>Crypto Portfolio Tracker</h2>
          <p>
            Keep track of your profits, losses, and portfolio valuation with our
            easy-to-use platform.
          </p>
          <div className="d-flex">
            <button className="btn btn-primary mr-3">
              Create Your Portfolio
            </button>
            <button className="btn btn-secondary">Login</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="sample-image.jpg" alt="Sample" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
