import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section
      id="not-found"
      className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container text-center ">
        <h3> Oooops... Page not found</h3>
        <h4>You just hit a wrong url.</h4>
        <p>
          will you like to go back to <br />
          <Link className=" fw-bold mt-4 " href="/">
            Home Page?
          </Link>
        </p>
      </div>
    </section>
  );
}
