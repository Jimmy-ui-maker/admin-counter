import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="row content justify-content-center align-items-center">
            <div className="row">
              <h2 className=" mt-2 text-center">Computer Science Departmental Student Details App</h2>
              <hr />
            </div>
            <div className="col-lg-6">
              <img src="/images/features.png" className="img-fluid pt-2" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 text-border">
              <h3 className="fw-bolder text-md-start">Background:</h3>
              <p className="lead">
                According to an Elsevier report, only about 1% of the
                world&apos;s research is by Africans Scholars in Africa. This is
                not because Africans are not talented enough, they are not given
                enough support or resources to conduct a research. instead, the
                outsiders (especially Europeans and North Americans) have been
                keen on stealing data from Africa to publish papers for their
                own promotion
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about ">
        <div className="container section-bg p-3">
          <div className="row content">
            <div className="col-lg-12 mt-5">
              <h3 className="fw-bolder">Purpose</h3>
              <div>
                <h5>The purpose of the application is to:</h5>
                <ul>
                  <li>
                    <i className=" bi bi-chevron-right"> </i>
                    be able to capture the total number of student in each
                    level.
                  </li>
                  <li>
                    <i className=" bi bi-chevron-right"> </i>
                    be able to know the current 'active' student in section.
                  </li>
                  <li>
                    <i className=" bi bi-chevron-right"> </i>
                    be able to capture and store defer student.
                  </li>
                  <li>
                    <i className=" bi bi-chevron-right"> </i>
                    store any crime commited by the student, as well good
                    conduct.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <h3 className="fw-bolder">Aims and gold</h3>
              <p>To be able to achieved all purpose listed above.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
