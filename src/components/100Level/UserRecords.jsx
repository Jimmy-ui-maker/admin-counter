import Link from "next/link";
import React from "react";

import data from "../local-map/100.json";

export default async function UserRecords() {
  return (
    <>
      <section
        id="oneCard"
        className=" shadow-sm w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container py-5">
          <div class="section-title text-center">
            <h2>All records about 100 Level Students</h2>
            <p>click to see</p>
          </div>

          <div className="row g-3 mb-5">
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <Link className=" text-decoration-none" href="/one/allTable">
                <div className="card">
                  <img src={"/images/features.png"} className="card-img-top " />

                  <hr />
                  <div className="card-body c-body text-center">
                    <h4 className="mt-2 ">Total Student</h4>
                    <p className="leade ">233</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <Link className=" text-decoration-none" href="/one/defferTable">
                <div className="card">
                  <img src={"/images/features.png"} className="card-img-top " />

                  <hr />
                  <div className="card-body c-body text-center">
                    <h4 className="mt-2 ">Deffer Student</h4>
                    <p className="leade ">13</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <Link className=" text-decoration-none" href="/one/firstClsTable">
                <div className="card">
                  <img src={"/images/features.png"} className="card-img-top " />

                  <hr />
                  <div className="card-body c-body text-center">
                    <h4 className="mt-2 ">First Class Student</h4>
                    <p className="leade ">7</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <div className="card">
                <Link href="/">
                  <img src={"/images/features.png"} className="card-img-top " />
                </Link>
                <hr />
                <div className="card-body c-body text-center">
                  <h4 className="mt-2 ">Second Class Student</h4>
                  <p className="leade ">187</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <div className="card">
                <Link href="/">
                  <img src={"/images/features.png"} className="card-img-top " />
                </Link>
                <hr />
                <div className="card-body c-body text-center">
                  <h4 className="mt-2 ">Third Class Student</h4>
                  <p className="leade ">233</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <div className="card">
                <Link href="/">
                  <img src={"/images/features.png"} className="card-img-top " />
                </Link>
                <hr />
                <div className="card-body c-body text-center">
                  <h4 className="mt-2 ">Pass Degree</h4>
                  <p className="leade ">68</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <div className="card">
                <Link href="/">
                  <img src={"/images/features.png"} className="card-img-top " />
                </Link>
                <hr />
                <div className="card-body c-body text-center">
                  <h4 className="mt-2 ">Carry Over Student</h4>
                  <p className="leade ">30</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <div className="card">
                <Link href="/">
                  <img src={"/images/features.png"} className="card-img-top " />
                </Link>
                <hr />
                <div className="card-body c-body text-center">
                  <h4 className="mt-2 ">Widthrow Student</h4>
                  <p className="leade ">5</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3 mb-4 ">
              <div className="card">
                <Link href="/">
                  <img src={"/images/features.png"} className="card-img-top " />
                </Link>
                <hr />
                <div className="card-body c-body text-center">
                  <h4 className="mt-2 ">Mal-Practice</h4>
                  <p className="leade ">15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
