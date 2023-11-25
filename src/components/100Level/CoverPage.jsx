import React from 'react'

export default function CoverPage() {
  return (
    <section
    id="levelOne"
    className=" shadow-sm w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <div className=" container levelOne">
      <div className="row justify-content-center align-content-center ">
        <h1 className="">Welcome to 100 Level Computer Science Department</h1>
        <div className="col-lg-6 col-md-6 col-12 text-lg-start">
          <img
            data-aos="zoom-out"
            data-aos-delay="200"
            src="/kasu/slt-one.jpg"
            alt="hero img"
            className=" img-fluid rounded-2"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <a href="/" class=" mx-2"  >
          <i class="bi bi-chevron-left"></i>
        </a>
        <a href="#all-cards" class="btn-start mx-2">
          <i class="bi bi-chevron-double-down"></i>
        </a>
        <a href="/levelTwo" class=" mx-2"  >
          <i class="bi bi-chevron-right"></i>
        </a>
      </div>
    </div>
  </section>
  )
}
