import Link from "next/link";
import React from "react";

export default function CoverPage() {
  return (
    <section
      id="levelTwo"
      className=" w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div>
        <div className="container">
          <div className="  row d-flex justify-content-center align-items-center text-center">
            <div className="topic col-lg-12 col-12">
              <h1>Welcome to 200 Level </h1>
              <h2>Feel free to interact with the app</h2>
              <div className=" d-flex justify-content-center">
                <Link className="btn rounded-2 border-info" href={""}>
                  Get Started
                </Link>
              </div>
            </div>

            <div className="c-card  row g-4">
              <div className="col-lg-3 col-6">
                <div className="card rounded-2 p-4 " data-aos="fade-up">
                  <Link href={""}>
                    <i class="bi bi-person"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card rounded-2 p-4 " data-aos="fade-up">
                  <Link href={""}>
                    <i class="bi bi-person "></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card rounded-2 p-4 " data-aos="fade-up">
                  <Link href={""}>
                    <i class="bi bi-person"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="card rounded-2 p-4 " data-aos="fade-up">
                  <Link href={""}>
                    <i class="bi bi-person"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
