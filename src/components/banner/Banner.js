import React from "react";
import "./Banner.css";

function MyBanner() {
  return (
    <div className="banner">
      <div className="leftbuttondiv">
        <h1> LOYALTY CLUB</h1>

        <p>
          Welcome to the Oner Active Loyalty Club.
          <br />
          Become a member, collect loyalty points and gain valuable benefits.
        </p>
        <div>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 20,
              padding: 10,
              width: 100,
            }}
          >
            Join Now
          </button>
        </div>
        <p>
          Already have an account?<a href="#">Log in</a>
        </p>
      </div>
    </div>
  );
}
export default MyBanner;
