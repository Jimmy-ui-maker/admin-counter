import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="row no-gutters">
          <h1 className=" text-center">SCS Student Records</h1>
          <hr />
          <div
            class="content col-xl-5 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div class="content">
              <h3>Purposes</h3>
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i> to be able to capture the
                  total number of student in each level.
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  to be able to know the current 'active' student in section.
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  to be able to capture and store defer student.
                </li>

                <li>
                  <i class="bi bi-chevron-right"></i>
                  to store any crime commited by the student, as well good
                  conduct.
                </li>
              </ul>
              <a href="/" class="about-btn">
                About us <i class="bx bx-chevron-right"></i>
              </a>
            </div>
          </div>
          <div class="col-xl-7 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i class="bi bi-question-lg"></i>
                  <h4>Why choose us</h4>
                  <p>
                    <Link className="btn rounded-2 border-info" href={"/"}>
                      Check it here
                    </Link>
                  </p>
                </div>
                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i class="bi bi-question-circle-fill"></i>
                  <h4>FAQs</h4>
                  <p>
                    <Link className="btn rounded-2 border-info" href={"/"}>
                      Check it here
                    </Link>
                  </p>
                </div>
                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i class="bi bi-clipboard-plus"></i>
                  <h4>Total Students </h4>
                  <p>
                    <Link className="btn rounded-2 border-info" href={"/"}>
                      In all Department
                    </Link>
                  </p>
                </div>
                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i class="bi bi-clipboard-plus"></i>
                  <h4>Total student </h4>
                  <p>
                    <Link className="btn rounded-2 border-info" href={"/"}>
                      Each department
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
