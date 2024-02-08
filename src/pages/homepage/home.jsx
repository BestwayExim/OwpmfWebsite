import React, { useState } from "react";
import "./Home.css";
// import MyBanner from "../../components/banner/Banner";
import DoneIcon from "@mui/icons-material/Done";
import Footer from "../../components/Footer/Footer";
// import { Margin } from "@mui/icons-material";
// import CloseIcon from "@mui/icons-materal/Close";
import Cards from "../../components/thirdSection/Cards";
import CardGrid from "../../components/cardGrid/CardGrid";
import FAQ from "../../components/FAQ/FaqPAge";
// import JoinModal from "../../components/Modal/JoinModal";

function HomePage() {
  const [showModal, setModalOpen] = useState(false);
  return (
    <div className="full_div">
      {/* <JoinModal isModalOpen={setModalOpen} showModal={showModal} /> */}
      <div className="">
        <div className="headingdiv ">
          <h3 style={{ fontWeight: 600 }}>HOW IT WORKS.</h3>
          <p>
            Earn peace Points and redeem them when making purchases, level up
            your member status to <br />
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
                    <p style={{color:"white"}} className="card-text">Create an account</p>
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
                    <p  style={{color:"white"}} className="card-text">
                      Earn points for
                      <br />
                      every $ spent
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
                    <p  style={{color:"white"}} className="card-text">
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
                    <h6 className="title">Step 3</h6>
                    <p  style={{color:"white"}} className="card-text">
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
          <button className="btns_small" onClick={() => setModalOpen(true)}>
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
        <CardGrid/>

        <div className="m-5  ">
        <button style={{color:"black"}} className='btns'>Join Now</button>
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
              <table  class="table">
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
                        backgroundColor:"#0E0E0E",
                        color:"white"
                      }}
                    >
                      Spent per calendar year
                    </th>
                    <th style={{ backgroundColor: "#417D98" }}>
                      Neptune
                      <br />
                      Free
                    </th>
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
                    <td scope="row">
                      Loyalty Point Gain : 1 point per $ Spent
                    </td>
                    <td>1 Points</td>
                    <td>3 Points</td>
                    <td>5 Points</td>

                    <td>10 Points</td>
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
                    <td>Tele Consultation Service @ 25% Discount</td>
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
                    <td>Invitation to special Events</td>
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
                    <td style={{ border: "0" }}></td>
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
            <button className="btns">Join Now</button>
          </div>

          {/* forth End */}
          <div
            s
            className="container "
            style={{ marginBottom: "5%", textAlign: "left" }}
          >

<FAQ/>




            <h4 style={{ fontWeight: 700,color:"white" }} className="text-center mb-4">
              FAQ - GENERAL
            </h4>

            <h6 style={{ fontWeight: 700 }}>Q: What is the OWPMF??</h6>
            <p>
              A: It is our way of saying “thank you” for being a loyal customer.
              Earn points (Peace Points) and redeem when making purchases, level
              up to get exclusive perks, or benefit from referring friends.
            </p>
            <h6 style={{ fontWeight: 700 }}>
              Q: How to become a Loyalty club member?
            </h6>
            <p>
              A: As soon as you sign up with OWPMF, or if you are an existing
              registered customer, you will automatically receive free
              membership to our OWPMF.
            </p>

            <h4 style={{ fontWeight: 700,color:"white" }} className="text-center mb-4">
              FAQ - PEACE
            </h4>
            {/* <h6 style={{ fontWeight: 700 }}>
              Q: What is the Oner Active Loyalty member club?
            </h6>
            <p>
              A: It is our way of saying “thank you” for being a loyal customer.
              Earn points (Peace Points) and redeem when making purchases, level
              up to get exclusive perks, or benefit from referring friends.
            </p> */}
            <h6 style={{ fontWeight: 700 }}>
              Q: How to become a Loyalty club member?
            </h6>
            <p>
              A: As soon as you sign up with Oner Active, or if you are an
              existing registered customer, you will automatically receive free
              membership to our Loyalty Club
            </p>
            <h6 style={{ fontWeight: 700 }}>
              {" "}
              Q: What is the Oner Active Loyalty member club?
            </h6>
            <p>
              A: It is our way of saying “thank you” for being a loyal customer.
              Earn points (Peace Points) and redeem when making purchases, level
              up to get exclusive perks, or benefit from referring friends.
            </p>
            <h6 style={{ fontWeight: 700 }}>
              Q: How to become a Loyalty club member?
            </h6>
            <p>
              A: As soon as you sign up with Oner Active, or if you are an
              existing registered customer, you will automatically receive free
              membership to our Loyalty Club
            </p>
          </div>
          <div className="banner2">
            <div className="text">
              <h2>IT'S YOUR TURN!</h2>
              <p>
                Join today and collect loyalty points to gain valuable benefits.
              </p>

              <button className="btns">Join Now</button>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
