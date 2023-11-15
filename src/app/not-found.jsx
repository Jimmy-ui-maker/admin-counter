import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className=" container ">
      <section className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3> Awwwnnn Oooops...</h3>
        <h4>You just hit a wrong url.</h4>
        <p>
          will you like to go back to <Link className=" text-decoration-none text-success" href="/"> Home Page?</Link>
        </p>
      </section>
    </div>
  );
}
