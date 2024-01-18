import { LevelOne } from "@/models/Tables";
import Link from "next/link";
import React from "react";

export default async function Activities1() {
  const allStudents = await LevelOne.countDocuments();
  return (
    <section id="all-cards" class="all-cards">
      <div class="container">
        <div class="section-title">
          <h2 data-aos="fade-up" data-aos-delay="100">
            List of 100 Level Activities
          </h2>
          <hr />
          <p data-aos="fade-up" data-aos-delay="200">
            Here are the list of all possible activities in 100 Level.
            <br />
            Click and see for yourself
          </p>
        </div>

        <div class="row g-4">
          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div className="card p-3 icon-box" data-aos="fade-up">
              <Link href={"/levelOne/allTable"} class="icon ">
                <i class="bi bi-patch-plus"></i>
              </Link>

              <h4 class="title">
                <a href="/levelOne/allTable">Total Students</a>
              </h4>
              <p class="description">{allStudents}</p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon">
                <i class="bi bi-patch-plus"></i>
              </div>

              <h4 class="title">
                <a href="">Deffer Student</a>
              </h4>
              <p class="description">233</p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon">
                <i class="bi bi-patch-plus"></i>
              </div>

              <h4 class="title">
                <a href="">First Class Student</a>
              </h4>
              <p class="description">3</p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="icon">
                <i class="bi bi-patch-plus"></i>
              </div>

              <h4 class="title">
                <a href="">Second Class Student</a>
              </h4>
              <p class="description">233</p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div className="card p-3 icon-box" data-aos="fade-up">
              <div class="icon">
                <i class="bi bi-patch-plus"></i>
              </div>

              <h4 class="title">
                <a href="">Third Class Student</a>
              </h4>
              <p class="description">23</p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon">
                <i class="bi bi-patch-plus"></i>
              </div>

              <h4 class="title">
                <a href="">Pass Degree</a>
              </h4>
              <p class="description">203</p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon">
                <i class="bi bi-patch-plus"></i>
              </div>

              <h4 class="title">
                <a href="">Carry Over Student</a>
              </h4>
              <p class="description">17</p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="icon">
                <i class="bi bi-patch-plus"></i>
              </div>

              <h4 class="title">
                <a href="">Widthrow Student</a>
              </h4>
              <p class="description">9</p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div className="card p-3 icon-box" data-aos="fade-up">
              <div class="icon">
                <i class="bi bi-patch-plus"></i>
              </div>

              <h4 class="title">
                <a href="">Mal-Practice</a>
              </h4>
              <p class="description">3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
