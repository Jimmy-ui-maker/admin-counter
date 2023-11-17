import Link from "next/link";
import React from "react";

export default function LevelCard() {
  return (
    <section
      id="levels"
      className=" shadow-sm w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container py-5">
        <div class="section-title">
          <h2>Locate your level and navigate inside</h2>
          <p> to see more details about your level</p>
        </div>

        <div className="row g-3 mb-5">
          <div className="col-6 col-md-3 col-lg-3 mb-4 ">
            <Link className=" text-decoration-none" href="/one">
              <div className="card" data-aos="fade-up" >
                <img src="/images/features.png" className="card-img-top " />

                <hr />
                <div className="card-body c-body">
                  <h4 data-aos="fade-up" >100 Level Section</h4>
                  <p data-aos="fade-up" data-aos-delay="200">Total Student: 233</p>
                  <h4 data-aos="fade-up" data-aos-delay="200">Level Coordinator</h4>
                  <p data-aos="fade-up" data-aos-delay="200">Sir Jimmy</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 col-lg-3 mb-4 ">
            <div className="card" data-aos="fade-up" >
              <Link href="/">
                <img src="/images/about.jpg" className="card-img-top " />
              </Link>
              <hr />
              <div className="card-body c-body">
                <h4 data-aos="fade-up" >200 Level Section</h4>
                <p data-aos="fade-up" data-aos-delay="200">Total Student: 203</p>
                <h4 data-aos="fade-up" data-aos-delay="200">Level Coordinator</h4>
                <p data-aos="fade-up" data-aos-delay="200">Sir Micah</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3 mb-4 ">
            <div className="card" data-aos="fade-up" >
              <Link href="/">
                <img src="/images/features-2.png" className="card-img-top " />
              </Link>
              <hr />
              <div className="card-body c-body">
                <h4 data-aos="fade-up" >300 Level Section</h4>
                <p data-aos="fade-up" data-aos-delay="200">Total Student: 233</p>
                <h4 data-aos="fade-up" data-aos-delay="200">Level Coordinator</h4>
                <p data-aos="fade-up" data-aos-delay="200">Emmanuel Okafor</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3 mb-4 " >
            <div className="card" data-aos="fade-up">
              <Link href="/" >
                <img src="/images/features-3.png" className="card-img-top " />
              </Link>
              <hr />
              <div className="card-body c-body">
                <h4 data-aos="fade-up">400 Level Section</h4>
                <p data-aos="fade-up" data-aos-delay="200">Total Student: 199</p>
                <h4 data-aos="fade-up" data-aos-delay="200">Level Coordinator</h4>
                <p data-aos="fade-up" data-aos-delay="200">Abdullahi Usman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
