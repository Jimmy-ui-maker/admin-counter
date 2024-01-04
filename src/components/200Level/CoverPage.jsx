import Link from "next/link";
import React from "react";

export default function CoverPage() {
  return (
    <section
      id="leveTwo"
      className="leveTwo w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
       <div className="container text-center">
        <div class="btns" data-aos="fade-up" data-aos-delay="300">
          <h1>WELCOME TO 200 LEVEL CSC DEPARTMENT</h1>
          <h2 className=" mt-4"></h2>
          <Link className="btn btn-get-started p-3 rounded-2 " href={"/levelTwo#twoCards"}>
            Get Started
          </Link>

          <div className=" mt-4 d-flex justify-content-center">
          <a href="/levelOne" class=" btn m-route mx-2">
            <i class="bi bi-chevron-left"></i>
          </a>
          <a href="/login" class="btn m-route mx-2">
            Admin
          </a>
          <a href="/levelThree" class="btn m-route mx-2">
            <i class="bi bi-chevron-right"></i>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
