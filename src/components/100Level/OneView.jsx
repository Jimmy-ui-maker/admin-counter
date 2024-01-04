import { LevelOne } from "@/models/Tables";
import Link from "next/link";
import React from "react";
import DeleteBtn from "./DeleteBtn";

export default async function OneView() {
  //const levelOne = await LevelOne.find();
  //const count = await LevelOne.find().count();
  return (
    <section id="adminView" class="adminView section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Level One Recods Page</h2>
          <hr />
          <Link className=" btn  border-info" href={"/create1"}>
            <i className="bi bi-patch-plus text-dark"></i>
          </Link>
          <p>
            Look around or search your matric
            <br />
            Check yours.
          </p>
          <p className=" mt-2">Total =  {count}</p>
        </div>

        <div class="row g-4">
          {levelOne.map((one) => (
            <div
              key={one.id}
              class="col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img src="/kasu/one-k.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>{one.matric}</h4>
                  <span>{one.name}</span>
                  <p>{one.level}</p>
                  <p>{one.phone}</p>
                  <p>{one.desc}</p>
                  <div class="social">
                    <Link className=" text-dark" href={`/edit/${one._id}`}>
                      <i class="bi bi-pen"></i>
                    </Link>

                    <Link href="">
                      <i class="bi bi-instagram"></i>
                    </Link>
                    <Link href="">
                      <i class="bi bi-linkedin"></i>{" "}
                    </Link>
                    <DeleteBtn id={one._id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/**
          
          <div
            class="col-lg-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="/kasu/one-k.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Bala Jimmy Yakubu</h4>
                <span>Secretary Manager</span>
                <p>From United State of America (USA), City Town.</p>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="/kasu/one-k.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Favour Yohanna</h4>
                <span>CTO</span>
                <p>
                  Quisquam facilis cum velit laborum corrupti fuga rerum quia
                </p>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="/kasu/one-k.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Favour Yohanna</h4>
                <span>Accountant</span>
                <p>
                  Dolorum tempora officiis odit laborum officiis et et accusamus
                </p>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
           */}
        </div>
      </div>
    </section>
  );
}
