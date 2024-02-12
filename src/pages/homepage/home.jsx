import React, { useContext, useState } from "react";
import "./Home.css";
// import MyBanner from "../../components/banner/Banner";
import DoneIcon from "@mui/icons-material/Done";
import Footer from "../../components/Footer/Footer";
// import { Margin } from "@mui/icons-material";
// import CloseIcon from "@mui/icons-materal/Close";
import Cards from "../../components/thirdSection/Cards";
import CardGrid from "../../components/cardGrid/CardGrid";
import FAQ from "../../components/FAQ/FaqPAge";
import { QRCodeProvider } from "../..";
// import JoinModal from "../../components/Modal/JoinModal";
import video from "../../Assets/Video.mp4";
function HomePage() {
  const { show, handleClose } = useContext(QRCodeProvider);

  const [showModal, setModalOpen] = useState(false);
  return (
    <div className="full_div">
      {/* <JoinModal isModalOpen={setModalOpen} showModal={showModal} /> */}
      <div className="">
        <div style={{ marginBottom: "90px" }} className="headingdiv ">
          <h3 style={{ fontWeight: 600, color: "white" }}>HOW IT WORKS.</h3>
          <p className="p-3">
            Earn peace Points and redeem them when making purchases, level up
            your member status to 
            get exclusive perks, and benefit from referring friends.
          </p>
        </div>

        <div class="container ">
          <div className="iconsdiv ">
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4">
              <div class="col ">
                <div style={{ backgroundColor: "black" }} className="card ">
                  <div className="icon ">
                    <img
                      src="/images/user-icon.png"
                      className="iconimg"
                      alt=""
                    />
                  </div>
                  <div className="card-body mb-4">
                    <h6 className="title">Step 1</h6>
                    <p style={{ color: "white" }} className="card-text">
                      Create an account
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div style={{ backgroundColor: "black" }} className="card">
                  <div className="icon">
                    <img className="iconimg" src="/images/subscribe 1.png" />
                  </div>
                  <div className="card-body mt-2">
                    <h6 className="title">Step 2</h6>
                    <p style={{ color: "white" }} className="card-text">
                      Earn points for every $ spent
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div style={{ backgroundColor: "black" }} className="card">
                  <div className="icon">
                    <img class="iconimg" src="/images/level-up 1.png" />
                  </div>
                  <div className="card-body">
                    <h6 className="title">Step 3</h6>
                    <p style={{ color: "white" }} className="card-text">
                      Level up for
                      <br />
                      exclusive perks
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div style={{ backgroundColor: "black" }} className="card">
                  <div className="icon">
                    <img className="iconimg" src="/images/box (1) 1.png" />
                  </div>
                  <div className="card-body">
                    <h6 className="title">Step 4</h6>
                    <p style={{ color: "white" }} className="card-text">
                      Redeem points &<br />
                      shop for free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <button className="btns_small" onClick={() => handleClose(true)}>
            JOIN NOW
          </button>
        </div>

        <p style={{ textAlign: "center", marginBottom: " 4%" }}></p>
        <div className="seconthead" style={{ textAlign: "center" }}>
          <div className="seconthead mt-5 " style={{ textAlign: "center" }}>
            <h3 style={{ fontWeight: 700, marginBottom: "20px" }}>
              HOW TO EARN POINTS.
            </h3>
            <p>
              There are many ways to earn Peace Points. Take a look! It‘s super
              easy.
            </p>
          </div>

          {/* Second Section start */}
          <div style={{ marginTop: "80px" }} class="container">
            <CardGrid />

            <div className="m-5  ">
              <button
                onClick={() => handleClose(true)}
                style={{ color: "black" }}
                className="btns"
              >
                Join Now
              </button>
            </div>

            {/* <div style={{marginTop:"150px"}} className="iconsdiv ">
              <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4">
                <div class="col">
                  <div className="card">
                    <div className="iconsecont">
                      <img
                        class="bp-how-it-works-img"
                        src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_01.svg?v=1600248639"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="title">+350 Points</h6>
                      <p className="card-text">Create an account</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="card">
                    <div className="iconsecont">
                      <img
                        class="bp-how-it-works-img"
                        src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_02.svg?v=1600248639"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="title">Up to* 150 Points</h6>
                      <p className="card-text">Per $1 spent</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="card">
                    <div className="iconsecont">
                      <img
                        class="bp-how-it-works-img"
                        src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_03.svg?v=1600248639"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="title">+750 Points</h6>
                      <p className="card-text">Share your birthday</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="card">
                    <div className="iconsecont">
                      <img
                        class="bp-how-it-works-img"
                        src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_04.svg?v=1600248639"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="title">+10,000 Points</h6>
                      <p className="card-text">Refer a friend</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* <div class="container">
            <div className="iconsdiv ">
              <div
                class="row row-cols-2 row-cols-md-2 row-cols-lg-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div class="col">
                  <div className="card">
                    <div className="iconsecont">
                      <img
                        class="bp-how-it-works-img"
                        src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_05.svg?v=1600248639"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="title">+100 Points</h6>
                      <p className="card-text">Like us on Facebook</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="card">
                    <div className="iconsecont">
                      <img
                        class="bp-how-it-works-img"
                        src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_06.svg?v=1600248639"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="title">+100 Points</h6>
                      <p className="card-text">Follow us on Instagram</p>
                    </div>
                  </div>
                </div>
                <div class="col col-md-6 offset-md-3 col-lg-4 offset-lg-0">
                  <div className="card">
                    <div className="iconsecont">
                      <img
                        class="bp-how-it-works-img"
                        src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_07.svg?v=1600248639"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="title">+100 Points</h6>
                      <p className="card-text">Follow us on Twitter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div    className="buttonDiv">
            <button >Join Now</button>
          </div> */}

          {/* secondSection end Now */}

          {/*third Start */}
          <div
            className="navbarIcon mt-5"
            style={{ textAlign: "center", marginBottom: "3%" }}
          >
            <h2>MEMBER STATUS.</h2>
            <p>
              With every purchase you make, you move one step closer to
              levelling up your exclusive member status.
              <br /> Awesome perks and exclusive member-only items are waiting
              for you.
            </p>
          </div>
          <div className="container">
            <div className="tabledive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">
                      <img class="bp-status-bronze" src="/images/neptune.png" />
                    </th>
                    <th scope="col">
                      <img class="bp-status-silver" src="/images/saturn.png" />
                    </th>
                    <th scope="col">
                      <img class="bp-status-gold" src="/images/mars.png" />
                    </th>
                    <th scope="col">
                      <img class="bp-status-gold" src="/images/mercury.png" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: 0 }}>
                    <th
                      style={{
                        borderTop: 0,
                        textAlign: "end",
                        paddingTop: "2%",
                        backgroundColor: "#0E0E0E",
                        color: "white",
                      }}
                    >
                      Spent per calendar year
                    </th>
                    <th style={{ backgroundColor: "#417D98" }}>Neptune</th>
                    <th style={{ backgroundColor: "#D7C57F" }}>
                      SATURN
                      <br />
                      250 OWPC
                    </th>
                    <th style={{ backgroundColor: "#C37730" }}>
                      MARS
                      <br />
                      750 OWPC
                    </th>
                    <th style={{ backgroundColor: "#C1B9BB" }}>
                      MERCURY
                      <br />
                      1500 OWPC
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">Annual  charge</td>
                    <td>Free Tier</td>
                    <td>250 OWPC </td>
                    <td>750 OWPC</td>

                    <td>1500 OWPC</td>
                  </tr>
                  <tr>
                    <td scope="row">Loyalty Point Gain</td>
                    <td>1 Points per $ spent</td>
                    <td>3 Points per $ spent</td>
                    <td>5 Points per $ spent</td>

                    <td>10 Points per $ spent</td>
                  </tr>

                  <tr>
                    <td scope="row">Access to OWPC Wallet & Coin</td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                  </tr>

                  <tr>
                    <td scope="row">Point Conversion to OWPC</td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                  </tr>
                  <tr>
                    <td>Tele Consultation Service </td>
                    <td style={{ border: "0" }}></td>
                    <td>
                   25 % Discount
                    </td>
                    <td>
                   50 % Discount
                    </td>
                    <td>
                   Free
                    </td>
                  </tr>
                  <tr>
                    <td>Free OWPC Membership Gifts</td>
                    <td style={{ border: "0" }}></td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                  </tr>
                  <tr>
                    <td>Invitation </td>
                    <td style={{ border: "0" }}></td>
                    <td style={{ border: "0" }}></td>
                    <td>
                   spacial Events
                    </td>
                    <td>
                   Premium invitation to spacial events
                    </td>
                  </tr>
                  <tr>
                    <td>Discount offers at Stores</td>
                    <td style={{ border: "0" }}></td>
                    <td style={{ border: "0" }}></td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                  </tr>
                  <tr>
                    <td>Free Travel Consultation</td>
                    <td style={{ border: "0" }}></td>
                    <td style={{ border: "0" }}></td>
                    <td>
                      <DoneIcon />
                    </td>
                    <td>
                      <DoneIcon />
                    </td>
                  </tr>
                  <tr>
                    <td>Free Airport Lounge Access</td>
                    <td style={{ border: "0" }}></td>
                    <td style={{ border: "0" }}></td>
                    <td style={{ border: "0" }}></td>
                    <td>
                      <DoneIcon />
                    </td>
                  </tr>
                  <tr>
                    <td>Free Airport Pick up & Drop.</td>
                    <td style={{ border: "0" }}></td>
                    <td style={{ border: "0" }}></td>
                    <td style={{ border: "0" }}></td>
                    <td>
                      <DoneIcon />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <div className="buttonDiv">
            <button className="btns_small">Join Now</button>
          </div> */}

          {/*third End */}

          {/* forth Start */}

          {/* <div
            className="seconthead mt-5"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <h2>REFER FRIENDS FOR UP TO $50 OFF.</h2>
          </div> */}

          {/* <div style={{ marginBottom: "50px" }} class="">
            <div className="imagecardiv">
              <div
                style={{ width: "100%" }}
                class="row row-cols-2 row row-cols-xs-2 row-cols-md-2 row-cols-lg-4"
              >
                <div class="">
                  <img
                    class="lazy img-responsive loaded"
                    data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_5.png?v=1600256730"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_5.png?v=1600256730"
                    data-was-processed="true"
                  />

                  <div>
                    <div style={{ fontWeight: 600 }}>1 FRIEND</div>
                    <div style={{ fontFamily: "serif", fontWeight: 600 }}>
                      Earn 10,000 Peace Points
                    </div>
                    <div style={{ fontFamily: "serif", fontWeight: 600 }}>
                      worth $5.
                    </div>
                  </div>
                </div>

                <div class="">
                  <img
                    class="lazy img-responsive loaded"
                    data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_15.png?v=1600256730"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_15.png?v=1600256730"
                    data-was-processed="true"
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>1 FRIEND</div>
                    <div style={{ fontFamily: "serif", fontWeight: 600 }}>
                      Earn 10,000 Peace Points
                    </div>
                    <div style={{ fontFamily: "serif", fontWeight: 600 }}>
                      worth $5.
                    </div>
                  </div>
                </div>
                <div class="">
                  <img
                    class="lazy img-responsive loaded"
                    data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_25.png?v=1600256730"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_25.png?v=1600256730"
                    data-was-processed="true"
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>1 FRIEND</div>
                    <div style={{ fontFamily: "serif", fontWeight: 600 }}>
                      Earn 10,000 Peace Points
                    </div>
                    <div style={{ fontFamily: "serif", fontWeight: 600 }}>
                      worth $5.
                    </div>
                  </div>
                </div>
                <div class="">
                  <img
                    class="lazy img-responsive loaded"
                    data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_50.png?v=1600256730"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_50.png?v=1600256730"
                    data-was-processed="true"
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>1 FRIEND</div>
                    <div style={{ fontFamily: "serif", fontWeight: 600 }}>
                      Earn 10,000 Peace Points
                    </div>
                    <div style={{ fontFamily: "serif", fontWeight: 600 }}>
                      worth $5.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="buttonDiv">
            <button onClick={() => handleClose(true)} className="btns">
              Join Now
            </button>
          </div>

          <div style={{ margin: "50px" }} className="">
            <video width="100%" height="auto" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div></div>

          {/* forth End */}
          <div
            s
            className="container "
            style={{ marginBottom: "5%", textAlign: "left" }}
          >
            <FAQ />
          </div>
          <div className="p-5 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.7045916121378!2d55.29880042533457!3d25.155657905637874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f688c5516ea0f%3A0x44800f32689f57e2!2sThe%20Meydan%20Hotel!5e0!3m2!1sen!2sin!4v1707421252815!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
