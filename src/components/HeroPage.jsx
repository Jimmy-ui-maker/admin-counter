import Link from "next/link";
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
          height={170}
          className=" pb-4"
        />
        <div class="btns" data-aos="fade-up" data-aos-delay="300">
          <h3 className=" my-2">Student Counter</h3>
          <div className="row">
            <div className=" a-route col-lg-12 col-12">
              <Link href="#acts1" className="btn-level-one">
                100
              </Link>
              <Link href="#acts2" className="btn-level-two">
                200
              </Link>
              <Link href="#about" className="btn-get-started scrollto">
                <i className="bi bi-chevron-double-down"></i>
              </Link>
              <Link href="#acts3" className="btn-level-three">
                300
              </Link>
              <Link href="#acts4" className="btn-level-four">
                400
              </Link>
            </div>
           
            <div className=" d-flex justify-content-center">
              <Link
                className=" text-center border-white btn adminBtn"
                href={"/login"}
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
