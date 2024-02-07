import Header from "../components/header";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import React from "react";
import exampleImage1 from "../assets/pixlr-image-generator-465fd7c3-5dad-41fe-99fc-1f1ccb180dd8.png";
import exampleImage2 from "../assets/pixlr-image-generator-583f50d6-1f87-48e9-84ce-4f14fdc23230.png";
import exampleImage3 from "../assets/pixlr-image-generator-a371e917-b805-4b47-bd9a-b5c7aba64b18.png";

function History() {
  return (
    <div className="History-container">
      <Header />
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="div-image">
            <img className="image" src={exampleImage1} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="div-image">
            <img className="image" src={exampleImage2} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="div-image">
            <img className="image" src={exampleImage3} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="History-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
}

export default History;
