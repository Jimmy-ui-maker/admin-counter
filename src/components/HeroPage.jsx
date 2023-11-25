import React from "react";

export default function HeroPage() {
  return (
    <section
      id="hero"
      className=" w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container text-center">
        <img
          data-aos="fade-up"
          data-aos-delay="200"
          src="/kasu/kasulogo.png"
          alt="kasu-logo"
          width={200}
          height={150}
          className=" pb-4"
        />
        <div class="btns" data-aos="fade-up" data-aos-delay="300">
          <h1>Welcome to Kaduna State University</h1>
          <h2 className=" mt-4">Computer Science Department</h2>
          <h3 className=" mt-2">Student Records</h3>
          <a href="/levelOne" class="btn-level-one">
            100
          </a>
          <a href="/levelTwo" class="btn-level-two">
            200
          </a>
          <a href="#about" class="btn-get-started scrollto">
            <i class="bi bi-chevron-double-down"></i>
          </a>
          <a href="/levelThree" class="btn-level-three">
            300
          </a>
          <a href="/levelFour" class="btn-level-four">
            400
          </a>
        </div>
      </div>
    </section>
  );
}
