import Link from "next/link";
import React from "react";

export default function GeneralAdminLandingPage() {
  
  return (
    <>
      <header className="parallax-header">
        <div className="container ">
          <div
            className="header-content"
            data-aos="zoom-out"
            data-aos-delay="400"
          ></div>
        </div>
      </header>
      <div className="container p-4">
        <div className="content row  text-center">
          <div
            className="col-12 left p-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="primary-color text-uppercase">
              Welcome to Admin Page
              <hr className="mt-0 mb-2" />
            </h1>
            <h4>
              where you can <span className="instructor"> edit</span> and
              <span className="student"> delete</span> students records.
            </h4>
            <div className="d-flex justify-content-center ">
              <Link href="" className="btn btn-code me-2">
                <i className="text-white bi bi-chevron-double-down h1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
