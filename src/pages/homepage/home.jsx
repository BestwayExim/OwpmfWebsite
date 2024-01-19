import React from "react";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import "./Home.css";
import MyBanner from "../../components/banner/Banner";

function HomePage() {
  return (
    <div>
      <div className="headingdiv">
        <h1>HOW IT WORKS.</h1>
        <p>
          Earn Oner Points and redeem them when making purchases, level up your
          member status to <br />
          get exclusive perks, and benefit from referring friends.
        </p>
      </div>

      <div class="container">
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
                <div className="card-body">
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
                <div className="card-body">
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

      <p style={{ textAlign: "center", marginBottom: " 4%" }}>
        Already have an account?<a href="#">Log in</a>
      </p>
      <div className="seconthead" style={{ textAlign: "center" }}>
        <h1>HOW TO EARN POINTS.</h1>
        <p>
          There are many ways to earn Oner Points. Take a look! It‘s super easy.
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
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_02.svg?v=1600248639"
                  />
                </div>
                <div className="card-body">
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
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_03.svg?v=1600248639"
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
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_04.svg?v=1600248639"
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

      <div class="container">
        <div className="iconsdiv ">
          <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3">
            <div class="col">
              <div className="card">
                <div className="icon">
                  <img
                    class="bp-how-it-works-img"
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_05.svg?v=1600248639"
                  />
                </div>
                <div className="card-body">
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
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_06.svg?v=1600248639"
                  />
                </div>
                <div className="card-body">
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
                    src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_earn_07.svg?v=1600248639"
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
          </div>
        </div>
      </div>

      <div className="buttonDiv">
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

      <p style={{ textAlign: "center", marginBottom: " 4%" }}>
        Already have an account?<a href="#">Log in</a>
      </p>

      {/* secondSection end Now */}

      {/*third Start */}
      <div
        className="seconthead"
        style={{ textAlign: "center", marginBottom: "3%" }}
      >
        <h1>MEMBER STATUS.</h1>
        <p>
          With every purchase you make, you move one step closer to levelling up
          your exclusive member status.
          <br /> Awesome perks and exclusive member-only items are waiting for
          you.
        </p>
      </div>

      <div className="tabledive">
        <table class="table">
          <thead>
            <tr style={{ borderTop: 0 }}>
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
            <tr>
              <th></th>
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td scope="row">Exchange Oner Points for discounts</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td scope="row">Birthday offer</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>Free participation in a yearly giveaway</td>
            </tr>
            <tr>
              <td>Return shipping time (according to T&C)</td>
            </tr>
            <tr>
              <td>Member status entry reward</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="buttonDiv">
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

      <p style={{ textAlign: "center", marginBottom: " 4%" }}>
        Already have an account?<a href="#">Log in</a>
      </p>
      {/*third End */}

      {/* forth Start */}

      <div
        className="seconthead"
        style={{ textAlign: "center", marginBottom: "3%" }}
      >
        <h1>REFER FRIENDS FOR UP TO $50 OFF.</h1>
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
          </div>
        </div>
      </div>
      <div className="buttonDiv">
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

      <p style={{ textAlign: "center", marginBottom: " 4%" }}>
        Already have an account?<a href="#">Log in</a>
      </p>
      {/* forth End */}
      <div className="container" style={{ marginBottom: "5%" }}>
        <h4 className="text-center mb-4">FAQ - GENERAL</h4>
        <p>
          <h6>Q: What is the Oner Active Loyalty member club?</h6> A: It is our
          way of saying “thank you” for being a loyal customer. Earn points
          (Oner Points) and redeem when making purchases, level up to get
          exclusive perks, or benefit from referring friends.
        </p>

        <p>
          <h6>Q: How to become a Loyalty club member?</h6> A: As soon as you
          sign up with Oner Active, or if you are an existing registered
          customer, you will automatically receive free membership to our
          Loyalty Club
        </p>

        <h4 className="text-center mb-4 mt-4">FAQ - GENERAL</h4>

        <p>
          <h6>Q: What is the Oner Active Loyalty member club?</h6> A: It is our
          way of saying “thank you” for being a loyal customer. Earn points
          (Oner Points) and redeem when making purchases, level up to get
          exclusive perks, or benefit from referring friends.
        </p>

        <p>
          <h6>Q: How to become a Loyalty club member?</h6> A: As soon as you
          sign up with Oner Active, or if you are an existing registered
          customer, you will automatically receive free membership to our
          Loyalty Club
        </p>
        <p>
          <h6>Q: What is the Oner Active Loyalty member club?</h6> A: It is our
          way of saying “thank you” for being a loyal customer. Earn points
          (Oner Points) and redeem when making purchases, level up to get
          exclusive perks, or benefit from referring friends.
        </p>

        <p>
          <h6>Q: How to become a Loyalty club member?</h6> A: As soon as you
          sign up with Oner Active, or if you are an existing registered
          customer, you will automatically receive free membership to our
          Loyalty Club
        </p>
      </div>
      <MyBanner />

      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}

export default HomePage;
