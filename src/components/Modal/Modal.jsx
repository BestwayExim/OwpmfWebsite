import React, { useEffect, useState } from "react";
import "./Modal.css"; // Import your CSS file

const Modal = ({ setModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div>
      <div className="modal-container  open  modal-open">
        <div className="modal-content">
          <span
            onClick={() => {
              setModal(false);
            }}
            className="modal-close"
          >
            X
          </span>

          <div class="bg_image">
            <div style={{ padding: 30 }}>
              <a className=" d-flex align-items-start" href="#">
                <img
                  className=" "
                  style={{ width: "40px", height: "50px" }}
                  alt="Oner Active Logo"
                  src="https://api-uploads-cdn.sweettooth.io/panel_header/banner_image/processed/63912c07ead43c7dc6c0a287cacfbd4b757d10c56eebd8988bb4ad166b048126acbe7e96de1dfc1e.png"
                  data-was-processed="true"
                />
              </a>
              <h2 style={{ textAlign: "left", color: "black" }}>
                Loyalty Club
              </h2>
            </div>
          </div>
          <div
            style={{
              padding: 10,
              display: "flex",

              justifyContent: "center",
            }}
            className="container bgcardColor"
          >
            <div class="card">
              <h6 style={{ padding: 20 }}>Become a Member</h6>
              <p>
                Earn Peace Points and redeem when making purchases, level up
                your member status to get exclusive perks or benefit from
                refering a friend.
              </p>
              <button class="blue-button"> Join Now</button>
            </div>
          </div>
          <div
            style={{
              padding: 10,
              display: "flex",

              justifyContent: "center",
            }}
            className="container bgcardColor"
          >
            <div className="second_card">
              <h6 style={{ padding: 20 }}>peace point</h6>

              <p>
                Earn Peace Points for different actions, and turn those into
                awesome rewards.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: 10,
              display: "flex",

              justifyContent: "center",
            }}
            className="container bgcardColor"
          >
            <div className="second_card">
              <h6 style={{ padding: 20 }}>peace point</h6>

              <p>
                Earn Peace Points for different actions, and turn those into
                awesome rewards.
              </p>
            </div>
          </div>
          <div
            style={{
              padding: 10,
              display: "flex",

              justifyContent: "center",
            }}
            className="container bgcardColor"
          >
            <div className="second_card">
              <h6 style={{ padding: 20 }}>peace point</h6>

              <p>
                Earn Peace Points for different actions, and turn those into
                awesome rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
