"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import Link from "next/link";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <section className="admin-cards admin w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="  row d-flex justify-content-center align-items-center text-center">
          <div className="topic col-lg-12 col-12">
            <h1>Welcome to Admin Dashboard </h1>
            <h2>Feel free to interact with the app</h2>
            <div className=" d-flex justify-content-center">
              <div>
                Name:{" "}
                <span className=" fw-semibold text-white mx-1">
                  {session?.user?.name}
                </span>
              </div>
              <div>
                Email:{" "}
                <span className="fw-semibold text-white mx-1">
                  {session?.user?.email}
                </span>
              </div>
            </div>
          </div>
          <div class="row g-lg-4 g-3">
            <div className="col-6 col-lg-3 text-lg-start text-center ">
              <div className="card p-3 icon-box" data-aos="fade-up">
                <Link href={"/admOne"} class="icon ">
                  <i class="bi bi-person"></i>
                </Link>

                <h4 class="title">
                  <a href="">100 Level</a>
                </h4>
              </div>
            </div>

            <div className="col-6 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Link href={"/admTwo"} class="icon">
                  <i class="bi bi-person"></i>
                </Link>

                <h4 class="title">
                  <a href="">200 Level</a>
                </h4>
              </div>
            </div>

            <div className="col-6 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link href={"admThree"} class="icon">
                  <i class="bi bi-person"></i>
                </Link>

                <h4 class="title">
                  <a href="">300 Level</a>
                </h4>
              </div>
            </div>

            <div className="col-6 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link href={"admFour"} class="icon">
                  <i class="bi bi-person"></i>
                </Link>

                <h4 class="title">
                  <a href="">400 Level</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="row route  d-flex justify-content-center">
            <div className=" d-flex justify-content-center">
              <button
                onClick={() => signOut("/")}
                className=" my-2 btn btn-danger"
              >
                Log Out
              </button>
            </div>
            <div className=" col-lg-12 col-12 c-up">
              <a href="/levelOne" class="btn">
                <i class="bi bi-chevron-left"></i>
              </a>
              <a href="/levelTwo" class="btn">
                <i class="bi bi-chevron-left"></i>
              </a>

              <a href="/levelThree" class="btn">
                <i class="bi bi-chevron-right"></i>
              </a>
              <a href="/levelFour" class="btn">
                <i class="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
