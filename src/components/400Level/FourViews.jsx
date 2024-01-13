import { deleteLevelFour } from "@/app/servers/Actions4";
import { LevelFour } from "@/models/Tables";
import Link from "next/link";
import React from "react";
import { getManyFour } from "./FetchData";

export default async function FourViews() {
  const levelFour = await getManyFour();
  const count = await LevelFour.find().count();
  return (
    <section id="adminView" class="adminView section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2 className=" text-uppercase">Level Four Recods Page</h2>
          <hr />
          <Link className=" btn  border-info" href={"/create4"}>
            <i className="bi bi-patch-plus text-dark"></i>
          </Link>

          <p>
            Look around or search your matric
            <br />
            Check yours.
          </p>
          <p className=" mt-2">Total = {count}</p>
        </div>

        <div class="row g-4">
          {levelFour.map((four) => (
            <div
              key={four.id}
              class="col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img src="/kasu/one-k.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>{four.matric}</h4>
                  <span>{four.name}</span>
                  <p>{four.level}</p>
                  <p>{four.phone}</p>
                  <p>{four.desc}</p>
                  <div class="social">
                    <Link className=" text-dark" href={`/edit4/${four._id}`}>
                      <i class="bi bi-pen"></i>
                    </Link>

                    <Link href="">
                      <i class="bi bi-instagram"></i>
                    </Link>
                    <Link href="">
                      <i class="bi bi-linkedin"></i>{" "}
                    </Link>
                    <form action={deleteLevelFour}>
                      <input hidden name="id" value={four.id} />
                      <button type="submit" className="btn-del border-0 mx-2">
                        <i class="bi bi-trash"></i>
                      </button>
                    </form>
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
