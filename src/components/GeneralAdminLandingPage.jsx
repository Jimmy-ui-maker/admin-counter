import Link from "next/link";
import React from "react";

export default function GeneralAdminLandingPage() {
  return (
    <>
      <section
        id="gadmin"
        className=" w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
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
            <div className="row mx-2">
              <div className="card g-4 border-white ">
                <div className="card-body ">
                  <h3 className=" my-2">Welcome to Admin Page</h3>
                  <h5 className=" my-2 ">
                    Where you can Edit and Delete a Record's.
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" a-route col-lg-12 col-12">
                <a href="" className="btn-get-started scrollto">
                  <i className="bi bi-chevron-double-down"></i>
                </a>
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
    </>
  );
}
