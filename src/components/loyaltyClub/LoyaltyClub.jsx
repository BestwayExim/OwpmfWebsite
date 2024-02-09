import React, { useState } from "react";
import "./Loyaltyclub.css";
import Modal from "../Modal/Modal";
function MessageBox() {
const [ModalOpen, seModalOpen] = useState(false)




  return (
    <></>
//     <div>
// <div style={{cursor: "pointer"}}onClick={()=>
// {
//   seModalOpen(true)
// }} className="messgebox">
//       <div class="launcher-content-container">
//         <img
//           src="https://api-uploads-cdn.sweettooth.io/launcher/icon/processed/07cb590079e5916330bfc40002fab5eef8f969d9f5a3332d80e65a49db16bd0a48294efcff848371.png?color=%23FFFFFF"
//           alt=""
//           role="presentation"
//           class="launcher-icon"
//         />
//       </div>
//       <div class="launcher-text">
//       <span  className="oa-launcher-text">
//       LOYALTY
//     </span>
//         <span class="oa-launcher-text--club">CLUB</span>

//       </div>
//     </div>
//       {ModalOpen&&<Modal setModal={seModalOpen}/>}

//     </div>
    
  );
}

export default MessageBox;
