import { Carousel } from "react-bootstrap";
import "./CarouselItems.css";
const CarouselItems = () => {
  return (
    <Carousel style={{ marginTop: "80px" }}>
      <Carousel.Item>
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700779064/Comuna-de-Franck/y3by191xk39ogav8ytoc.jpg"
          alt=""
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700779063/Comuna-de-Franck/rfb1fpyzobiklo6pqov9.jpg"
          alt=""
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700779063/Comuna-de-Franck/rmdrn0b1y5po7xamkbna.jpg"
          alt=""
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700779063/Comuna-de-Franck/bph2xhtxkmninpkv81h2.jpg"
          alt=""
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1701807077/Comuna-de-Franck/suwryxffwzzpnbwaetbl.jpg"
          alt=""
          className="carousel-image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1700779063/Comuna-de-Franck/fncsluc6wlsuxrmvcfjd.jpg"
          alt=""
          className="carousel-image"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselItems;
