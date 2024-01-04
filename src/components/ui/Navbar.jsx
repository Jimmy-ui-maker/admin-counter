import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md shadow-sm py-1"
      data-aos="fade-down"
      data-aos-delay="5000"
    >
      <div className="container">
        <img
          src="/kasu/one-k.jpg"
          className=" rounded-2"
          width={30}
          height={30}
          alt=""
        />
        <a href="/" className="navbar-brand fw-bolder text-uppercase">
          Students Records
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link fw-bold">
                100 Level
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link fw-bold">
                200 Level
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link fw-bold">
                300 Level
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link fw-bold">
                400 Level
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
