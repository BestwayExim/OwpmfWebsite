import React, { useContext } from "react";
import "./Banner.css";
import { QRCodeProvider } from "../..";

function MyBanner() {
  const { show, handleClose } = useContext(QRCodeProvider);

  return (
    <div className="banner text-light">
      {/* <img src="https://www.oneractive.com/cdn/shop/files/ONER_LoyaltyClubHeadBanner_desktop_ms_20200825.png?v=1600256838" className='img1' alt="" /> */}

      <div style={{ color: "white" }} className="text">
        <h2>LOYALTY CLUB</h2>
        <p>
          Welcome to the one world peace maker foundation.
          <br />
          Become a member, collect peace points, and gain valuable benefits.
        </p>

        <button onClick={() => handleClose(true)} className="btns">
          Join Now
        </button>
      </div>
    </div>
  );
}
export default MyBanner;
