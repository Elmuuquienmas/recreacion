import React, { useRef } from "react";
import { Carousel, Button } from "react-bootstrap";
import ButtonGroup from "./ButtonGroup";

const PhotoGallery = () => {
  const carouselRef = useRef(null);

  return (
    <div className="row">
      <div className="col-md-7">
        <Carousel ref={carouselRef} interval={null}>
          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <div className="card" style={{ width: "48%" }}>
                <img
                  className="d-block w-100"
                  src="/Logo.jpg"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Logo</h5>
                </div>
              </div>
              <div className="card" style={{ width: "48%" }}>
                <img
                  className="d-block w-100"
                  src="/Precios.jpg"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Precios</h5>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-between">
              <div className="card" style={{ width: "48%" }}>
                <img
                  className="d-block w-100"
                  src="/kaldi.jpg"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Exterior</h5>
                </div>
              </div>
              <div className="card" style={{ width: "48%" }}>
                <img
                  className="d-block w-100"
                  src="very-nice.jpg"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Interior</h5>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-md-5">
        <ButtonGroup />
      </div>
    </div>
  );
};

export default PhotoGallery;
