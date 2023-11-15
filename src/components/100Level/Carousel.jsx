import Link from "next/link";
import React from "react";

export default function Carousel() {
  return (
    <section id="one">
      <div
        id="heroCarousel"
        data-bs-interval="5000"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" id="hero-carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/features.png"
              className="d-block w-100 caro-img"
              alt="..."
            />
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  Computer Science Department
                </h2>
                <div className="animate__animated animate__fadeInUp">
                  <div className="row text-center text-lg-center g-4">
                    <div className="col-lg-12 col-12 d-flex align-items-center justify-content-center">
                      <h3>This is Computer Science Students record</h3>
                    </div>
                    <div className="col-lg-12 col-12 d-flex align-items-center justify-content-around">
                      <Link className=" text-decoration-none c-link" href="/about">
                        Learn More
                      </Link>
                      <Link className=" text-decoration-none c-link" href="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/features-2.png"
              className="d-block w-100 caro-img"
              alt="..."
            />
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  CSC the best department
                </h2>
                <div className="animate__animated animate__fadeInUp">
                  <div className="row text-center text-lg-center g-4">
                    <div className="col-lg-12 col-12 d-flex align-items-center justify-content-center">
                      <small>
                        <h3>Welcome to 100 Level Student record Page</h3>
                      </small>
                    </div>
                    <div className="col-lg-12 col-12 d-flex align-items-center justify-content-around">
                      <Link className=" text-decoration-none c-link" href="/about">
                        Learn More
                      </Link>
                      <Link className=" text-decoration-none c-link" href="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/features-3.png"
              className="d-block w-100 caro-img"
              alt="..."
            />
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  Student record
                </h2>
                <div className="animate__animated animate__fadeInUp">
                  <div className="row text-center text-lg-center g-4">
                    <div className="col-lg-12 col-12 d-flex align-items-center justify-content-center">
                      <small>
                        <h3>Welcome to 100 Level Student record Page</h3>
                      </small>
                    </div>
                    <div className="col-lg-12 col-12 d-flex align-items-center justify-content-around">
                      <Link className=" text-decoration-none c-link" href="/about">
                        Learn More
                      </Link>
                      <Link className=" text-decoration-none c-link" href="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
