import { LevelTwo } from "@/models/Tables";
import Link from "next/link";
import React from "react";
import DeleteBtn2 from "./DeleteBtn2";

export default async function TwoView() {
  const levelTwo = await LevelTwo.find();
  const count = await LevelTwo.find().count();
  return (
    <section id="adminView" class="adminView section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Level Two Recods Page</h2>
          <hr />
          <Link className=" btn  border-info" href={"/create2"}>
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
          {levelTwo.map((two) => (
            <div
              key={two.id}
              class="col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img src="/kasu/one-k.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>{two.matric}</h4>
                  <span>{two.name}</span>
                  <p>{two.level}</p>
                  <p>{two.phone}</p>
                  <p>{two.desc}</p>
                  <div class="social">
                    <Link className=" text-dark" href={`/edit2/${two._id}`}>
                      <i class="bi bi-pen"></i>
                    </Link>

                    <Link href="">
                      <i class="bi bi-instagram"></i>
                    </Link>
                    <Link href="">
                      <i class="bi bi-linkedin"></i>{" "}
                    </Link>
                    <DeleteBtn2 id={two._id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
