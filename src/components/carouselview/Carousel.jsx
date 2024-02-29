import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
function CarouselBar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        //  height: "40px",
        // position: "relative",
        width: "100%",
        color: "white",
        alignItems: "center",
        justifyContent: "center",

        display: "flex",
        // marginBottom: ".5%",
      }}
    >
      <h1 style={{ padding: "4%" }}>
        ONE WORLD PEACEMAKER FOUNDATION L.L.C-FZ
      </h1>
      {/* <Carousel
        style={{
          width: "90%",
          height: "20px",

          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel.Item>
          <a
            class="oa-hdr19-bottom__item swiper-slide swiper-slide-active"
            href="https://www.oneractive.com/pages/loyalty-club"
            // style={{ width: "360px", marginRight: ".3px" }}
            data-swiper-slide-index="1"
          >
            <img
              style={{
                width: "15px",
                height: "15px",
                marginRight: ".3%",
                marginBottom: ".5%",
              }}
              class="img-bestpoints lazy loaded"
              data-src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_star_52e78893-4f53-448d-b251-806b60c2c4c0.svg?v=1600419912"
              alt="Loyalty Club"
              src="https://cdn.shopify.com/s/files/1/0429/6120/7445/files/loyalty_star_52e78893-4f53-448d-b251-806b60c2c4c0.svg?v=1600419912"
              data-was-processed="true"
            />
            Click to the Loyalty Club
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a
            class="oa-hdr19-bottom__item swiper-slide swiper-slide-prev"
            href="https://www.oneractive.com/pages/shipping"
            // style={{ width: "360px", marginRight: "1px" }}
            data-swiper-slide-index="0"
          >
            <span class="oa-header_shipping1-text">
              Free express shipping over $300 USD
            </span>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          {" "}
          <a
            class="oa-hdr19-bottom__item swiper-slide swiper-slide-prev"
            href="https://www.oneractive.com/pages/shipping"
            // style={{ width: "360px", marginRight: "1px" }}
            data-swiper-slide-index="0"
          >
            <span class="oa-header_shipping1-text">Easy returns</span>
          </a>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default CarouselBar;
