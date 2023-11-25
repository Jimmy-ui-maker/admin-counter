import Link from "next/link";
import React from "react";

export default function CoverPage() {
  return (
    <section
      id="levelTwo"
      className=" w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-container">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-6 col-12">
                    <h1>Welcome to 200 Level </h1>
                    <h2>Feel free to interact with the app</h2>
                    <div>
                      <Link className="btn rounded-2 border-info" href={""}>
                        Get Start
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <img
                      src="/kasu/slt-one.jpg"
                      className=" img-fluid 200 Level img rounded-2"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-container">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-6 col-12">
                    <h1>Welcome to 200 Level </h1>
                    <h2>Feel free to interact with the app</h2>
                    <div>
                      <Link className="btn rounded-2 border-info" href={""}>
                        Get Start
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <img
                      src="/kasu/one-k.jpg"
                      className=" img-fluid 200 Level img rounded-2"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
