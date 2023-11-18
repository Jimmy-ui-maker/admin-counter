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

        <div className="row g-3 mb-2">
          <div className="col-6 col-md-3 ">
            <Link className=" text-decoration-none" href="/one">
              <div className="card" data-aos="fade-up">
                <img src="/images/features.png" className="card-img-top " />

                <hr />
                <div className="card-body ">
                  <h4 data-aos="fade-up">
                    {" "}
                    <strong className="text-uppercase">
                      100 Level Section{" "}
                    </strong>
                  </h4>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Total Student: 233
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Level Coordinator
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Sir Jimmy
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3   ">
            <div className="card" data-aos="fade-up">
              <Link href="/">
                <img src="/images/about.jpg" className="card-img-top " />
              </Link>
              <hr />
              <div className="card-body ">
                <h4 data-aos="fade-up">
                  {" "}
                  <strong className="text-uppercase">100 Level Section </strong>
                </h4>
                <p data-aos="fade-up" data-aos-delay="200">
                  Total Student: 233
                </p>
                <p data-aos="fade-up" data-aos-delay="200">
                  Level Coordinator
                </p>
                <p data-aos="fade-up" data-aos-delay="200">
                  Sir Jimmy
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3   ">
            <div className="card" data-aos="fade-up">
              <Link className=" text-decoration-none" href="/">
                <img src="/images/features-2.png" className="card-img-top " />

                <hr />
                <div className="card-body ">
                  <h4 data-aos="fade-up">
                    {" "}
                    <strong className="text-uppercase">
                      100 Level Section{" "}
                    </strong>
                  </h4>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Total Student: 233
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Level Coordinator
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Sir Jimmy
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-3   ">
            <div className="card" data-aos="fade-up">
              <Link className=" text-decoration-none" href="/">
                <img src="/images/features-3.png" className="card-img-top " />

                <hr />
                <div className="card-body ">
                  <h4 data-aos="fade-up">
                    {" "}
                    <strong className="text-uppercase">
                      100 Level Section{" "}
                    </strong>
                  </h4>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Total Student: 233
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Level Coordinator
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Sir Jimmy
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
