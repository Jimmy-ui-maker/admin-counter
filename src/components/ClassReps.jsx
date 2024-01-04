import { LevelOne } from "@/models/Tables";
import Link from "next/link";
import React from "react";

export default async function ClassReps() {
  //const countOne = await LevelOne.find().count();
  return (
    <section id="all-cards" class="all-cards">
      <div class="container">
        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Class Representatives</h2>
          <hr />
          <p>
            Here are the list of all Class Representatives for all Levels.
            <br />
            Check yours.
          </p>
        </div>

        <div class="row g-4">
          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div className="card p-3 icon-box" data-aos="fade-up">
              <Link href={"/levelOne"} class="icon ">
                <i class="bi bi-person"></i>
              </Link>

              <h4 class="title">
                <a href="/levelOne">100 Level</a>
              </h4>
              <p class="description">
                Sir Jimmy
                <br />
                {countOne}
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Link href={""} class="icon">
                <i class="bi bi-person"></i>
              </Link>

              <h4 class="title">
                <a href="">200 Level</a>
              </h4>
              <p class="description">
                Sir Jimmy
                <br />
                233
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link href={""} class="icon">
                <i class="bi bi-person"></i>
              </Link>

              <h4 class="title">
                <a href="">300 Level</a>
              </h4>
              <p class="description">
                Sir Jimmy
                <br />
                233
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-3 text-lg-start text-center ">
            <div
              className="card p-3 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link href={""} class="icon">
                <i class="bi bi-person"></i>
              </Link>

              <h4 class="title">
                <a href="">400 Level</a>
              </h4>
              <p class="description">
                Sir Jimmy
                <br />
                233
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
