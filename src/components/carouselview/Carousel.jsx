import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
function CarouselBar() {
  return (
    <div
      style={{
        height: "30px",
        position: "relative",
        width: "100%",

        color: "black",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Carousel
        style={{ width: "80%", height: "15px", textAlign: "center" }}
        indicators={false}
        indicatorHeight={3}
      >
        <Carousel.Item>
          <h6>fghfs</h6>
        </Carousel.Item>
        <Carousel.Item>
          <h6>dsgdgds</h6>
        </Carousel.Item>
        <Carousel.Item>
          <h6>rdsyhdfhzdg</h6>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselBar;
