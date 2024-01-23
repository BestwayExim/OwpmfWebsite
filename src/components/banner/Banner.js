import React from "react";
import "./Banner.css";


function MyBanner() {
  return (
    <div className='banner text-light'>
     {/* <img src="https://www.oneractive.com/cdn/shop/files/ONER_LoyaltyClubHeadBanner_desktop_ms_20200825.png?v=1600256838" className='img1' alt="" /> */}

     <div style={
      {color:"black",
    }
     } className='text'>
        <h2>LOYALTY CLUB</h2>
        <p>Welcome to the OWPMF.<br/>
        Become a member, collect Peace points, and gain valuable benefits.</p>

        <button className='btns'>Join Now</button>
        
      
      </div>
  </div>
  );
}
export default MyBanner;
