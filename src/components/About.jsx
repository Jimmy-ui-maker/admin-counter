import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className=" shadow-sm py-5 about w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row content justify-content-center align-items-center">
          <div className="row">
            <h2 className=" text-lg-start text-center">
              Computer Science Department
            </h2>
          </div>
          <div className="col-lg-6">
            <img src="/images/features.png" className="img-fluid pt-2" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 text-border">
            <h3 className="fw-bolder text-md-start">Background:</h3>
            <p className="lead">
              According to an Elsevier report, only about 1% of the world&apos;s
              research is by Africans Scholars in Africa. This is not because
              Africans are not talented enough, they are not given enough
              support or resources to conduct a research. instead, the outsiders
              (especially Europeans and North Americans) have been keen on
              stealing data from Africa to publish papers for their own
              promotion
            </p>
            <div>
              <div class="text-center text-lg-start">
                <a
                  href="/about"
                  className="btn-about d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Read more</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
