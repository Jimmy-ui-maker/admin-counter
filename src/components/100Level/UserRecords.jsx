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
                    <h4>Total Student</h4>
                    <p>233</p>
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
                    <h4>Deffer Student</h4>
                    <p>13</p>
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
                    <h4>First Class Student</h4>
                    <p>7</p>
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
                  <h4>Second Class Student</h4>
                  <p>187</p>
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
                  <h4>Third Class Student</h4>
                  <p>233</p>
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
                  <h4>Pass Degree</h4>
                  <p>68</p>
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
                  <h4>Carry Over Student</h4>
                  <p>30</p>
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
                  <h4>Widthrow Student</h4>
                  <p>5</p>
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
                  <h4>Mal-Practice</h4>
                  <p>15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
