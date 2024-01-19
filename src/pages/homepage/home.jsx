import React from "react";
import "./Home.css";
import MyBanner from "../../components/banner/Banner";
import DoneIcon from "@mui/icons-material/Done";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <div className="headingdiv">
        <h2>HOW IT WORKS.</h2>
        <div className="headingdiv mt-5">
          <h1>HOW IT WORKS.</h1>
          <p>
            Earn Oner Points and redeem them when making purchases, level up
            your member status to <br />
            get exclusive perks, and benefit from referring friends.
          </p>
        </div>

        <div class="container ">
          <div className="iconsdiv ">
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4">
              <div class="col">
                <div className="card">
                  <div className="icon">
                    <img
                      class="bp-how-it-works-img"
                      src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_works_01.svg?v=1600248639"
                    />
                  </div>
                  <div className="card-body mb-4">
                    <h6 className="title">Step 1</h6>
                    <p className="card-text">Create an account</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="card">
                  <div className="icon">
                    <img
                      class="bp-how-it-works-img"
                      src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_works_02.svg?v=1600248639"
                    />
                  </div>
                  <div className="card-body mt-2">
                    <h6 className="title">Step 2</h6>
                    <p className="card-text">
                      Earn points for
                      <br />
                      every $ spent
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="card">
                  <div className="icon">
                    <img
                      class="bp-how-it-works-img"
                      src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_works_03.svg?v=1600248639"
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="title">Step 3</h6>
                    <p className="card-text">
                      Level up for
                      <br />
                      exclusive perks
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="card">
                  <div className="icon">
                    <img
                      class="bp-how-it-works-img"
                      src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_works_04.svg?v=1600248639"
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="title">Step 3</h6>
                    <p className="card-text">
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
          <button className="btns">Join Now</button>
        </div>

        <p style={{ textAlign: "center", marginBottom: " 4%" }}></p>
        <div className="seconthead" style={{ textAlign: "center" }}>
          <h2>HOW TO EARN POINTS.</h2>

          <div className="seconthead mt-5" style={{ textAlign: "center" }}>
            <h1>HOW TO EARN POINTS.</h1>
            <p>
              There are many ways to earn Oner Points. Take a look! It‘s super
              easy.
            </p>
          </div>

          {/* Second Section start */}
          <div class="container">
            <div className="iconsdiv ">
              <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4">
                <div class="col">
                  <div className="card">
                    <div className="icon">
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
                    <div className="icon">
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
                    <div className="icon">
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
                    <div className="icon">
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
            </div>
          </div>

          <div class="container">
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
                    <div className="icon">
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
                    <div className="icon">
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
                    <div className="icon">
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
          </div>

          <div className="buttonDiv">
            <button className="btns">Join Now</button>
          </div>

          {/* secondSection end Now */}

          {/*third Start */}
          <div
            className="seconthead mt-5"
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

          <div className="tabledive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    <img
                      class="bp-status-bronze"
                      src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/status_bronze.svg?v=1600248639"
                    />
                  </th>
                  <th scope="col">
                    <img
                      class="bp-status-silver"
                      src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/status_silver.svg?v=1600248639"
                    />
                  </th>
                  <th scope="col">
                    <img
                      class="bp-status-gold"
                      src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/status_gold.svg?v=1600248639"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: 0 }}>
                  <th
                    style={{ borderTop: 0, textAlign: "end", paddingTop: "2%" }}
                  >
                    Spent per calendar year
                  </th>
                  <th style={{ backgroundColor: "#8e6339" }}>
                    BRONZE
                    <br />
                    Free
                  </th>
                  <th style={{ backgroundColor: "#bcbcbc" }}>
                    SILVER
                    <br />
                    $350+
                  </th>
                  <th style={{ backgroundColor: "#bf9b4b" }}>
                    GOLD
                    <br />
                    $700+
                  </th>
                </tr>
                <tr>
                  <td scope="row">Points per $1 spent</td>
                  <td>100 Points</td>
                  <td>125 Points</td>
                  <td>150 Points</td>
                </tr>
                <tr>
                  <td scope="row">Exchange Oner Points for discounts</td>
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
                  <td scope="row">Birthday offer</td>
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
                  <td>Free participation in a yearly giveaway</td>
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
                  <td>Return shipping time (according to T&C)</td>
                  <td>30 days</td>
                  <td>45 days</td>
                  <td>60 days</td>
                </tr>
                <tr>
                  <td>Member status entry reward</td>
                  <td style={{ border: "0" }}></td>
                  <td>750 Points</td>
                  <td>1000 Points</td>
                </tr>
                <tr>
                  <td>Secret offers</td>
                  <td style={{ border: "0" }}></td>
                  <td style={{ border: "0" }}></td>
                  <td>
                    <DoneIcon />
                  </td>
                </tr>
                <tr>
                  <td>Secret offers</td>
                  <td style={{ border: "0" }}></td>
                  <td style={{ border: "0" }}></td>
                  <td>
                    <DoneIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="buttonDiv">
            <button className="btns">Join Now</button>
          </div>

          {/*third End */}

          {/* forth Start */}

          <div
            className="seconthead mt-5"
            style={{ textAlign: "center", marginBottom: "3%" }}
          >
            <h2>REFER FRIENDS FOR UP TO $50 OFF.</h2>
          </div>

          <div class="container">
            <div className="imagecardiv">
              <div class="row row-cols-2 row row-cols-xs-2 row-cols-md-2 row-cols-lg-4">
                <div class="col">
                  <img
                    class="lazy img-responsive loaded"
                    data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_5.png?v=1600256730"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_5.png?v=1600256730"
                    data-was-processed="true"
                  />
                </div>
                <div class="col">
                  <img
                    class="lazy img-responsive loaded"
                    data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_15.png?v=1600256730"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_15.png?v=1600256730"
                    data-was-processed="true"
                  />
                </div>
                <div class="col">
                  <img
                    class="lazy img-responsive loaded"
                    data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_25.png?v=1600256730"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_25.png?v=1600256730"
                    data-was-processed="true"
                  />
                </div>
                <div class="col">
                  <img
                    class="lazy img-responsive loaded"
                    data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_50.png?v=1600256730"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/GiftCard_COM_50.png?v=1600256730"
                    data-was-processed="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="buttonDiv">
            <button className="btns">Join Now</button>
          </div>

          {/* forth End */}
          <div className="container mt-5" style={{ marginBottom: "5%" }}>
            <h4 className="text-center mb-4">FAQ - GENERAL</h4>
            <p>
              <h6>Q: What is the Oner Active Loyalty member club?</h6> A: It is
              our way of saying “thank you” for being a loyal customer. Earn
              points (Oner Points) and redeem when making purchases, level up to
              get exclusive perks, or benefit from referring friends.
            </p>

            <p>
              <h6>Q: How to become a Loyalty club member?</h6> A: As soon as you
              sign up with Oner Active, or if you are an existing registered
              customer, you will automatically receive free membership to our
              Loyalty Club
            </p>

            <h4 className="text-center mb-4 mt-4">FAQ - GENERAL</h4>

            <p>
              <h6>Q: What is the Oner Active Loyalty member club?</h6> A: It is
              our way of saying “thank you” for being a loyal customer. Earn
              points (Oner Points) and redeem when making purchases, level up to
              get exclusive perks, or benefit from referring friends.
            </p>

            <p>
              <h6>Q: How to become a Loyalty club member?</h6> A: As soon as you
              sign up with Oner Active, or if you are an existing registered
              customer, you will automatically receive free membership to our
              Loyalty Club
            </p>
            <p>
              <h6>Q: What is the Oner Active Loyalty member club?</h6> A: It is
              our way of saying “thank you” for being a loyal customer. Earn
              points (Oner Points) and redeem when making purchases, level up to
              get exclusive perks, or benefit from referring friends.
            </p>

            <p>
              <h6>Q: How to become a Loyalty club member?</h6> A: As soon as you
              sign up with Oner Active, or if you are an existing registered
              customer, you will automatically receive free membership to our
              Loyalty Club
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
