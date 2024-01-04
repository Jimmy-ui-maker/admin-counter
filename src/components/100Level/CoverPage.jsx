import Link from "next/link";
import React from "react";

export default function CoverPage() {
  return (
    <section
      id="levelOne"
      className=" shadow-sm w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className=" container levelOne">
        <div className="row justify-content-center align-content-center ">
          <h1 className=" text-center" data-aos="fade-up" data-aos-delay="300">
            Welcome to 100 Level CSC Department
          </h1>
          <div className="col-lg-6  col-12 text-lg-start"></div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="/" class=" mx-2">
            <i class="bi bi-chevron-left"></i>
          </a>
          <a href="/login" class=" mx-2">
            Admin
          </a>
          <a href="/levelTwo" class=" mx-2">
            <i class="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
