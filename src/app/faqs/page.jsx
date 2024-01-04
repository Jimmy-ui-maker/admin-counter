import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <section id="faqs">
      <div class="container">
      <p className="display-6 mb-0 text-justify">
            <Link
              className="btn border-0  back  shadow btn-sm mx-1"
              href={"/#about"}
            >
              <i className="bi bi-arrow-left text-dark mx-1"> </i>
            </Link>
            
          </p>
        <div class="text-center">
          <h2>Fequently ask questions</h2>
          <p class="lead ">Answers to some of your questions here</p>
        </div>

        <div class="row my-4 g-4 justify-content-around align-items-center">
          <div class="col-lg-12">
            <div
              className="accordion "
              data-aos="fade-up"
              data-aos-delay="200"
              id="chapters"
            >
              {/*<!---Item 1-->*/}
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/*<!---Heading-->*/}
                <h2 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button shadow-none "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-1"
                    aria-expanded="true"
                    aria-controls="chapter-1"
                  >
                    Where can i locate my department?
                  </button>
                </h2>
                {/*<!---Accordion Collapse-->*/}
                <div
                  id="chapter-1"
                  className="accordion-colapse collapse show"
                  aria-labelledby="heading-1"
                  data-bs-parent="#chapters"
                >
                  {/*<!---Accordiion Body-->*/}
                  <div className="accordion-body ">
                    <p>
                      In the navigation bar at the top, or you can check your
                      department in the card above
                    </p>
                  </div>
                </div>
              </div>

              {/*<!---Item 2-->*/}
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/*<!---Heading-->*/}
                <h2 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-2"
                    aria-expanded="false"
                    aria-controls="chapter-2"
                  >
                    Can i know my level coordinator?
                  </button>
                </h2>

                <div
                  id="chapter-2"
                  className="accordion-colapse collapse"
                  aria-labelledby="heading-2"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      Why not if not yes. <br />
                      Kindly located your level, there you will see the name.
                    </p>
                  </div>
                </div>
              </div>

              {/*<!---Item 3-->*/}
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="accordion-button shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-3"
                    aria-expanded="false"
                    aria-controls="chapter-3"
                  >
                    Will i be able to check my result here?
                  </button>
                </h2>

                <div
                  id="chapter-3"
                  className="accordion-colapse collapse"
                  aria-labelledby="heading-3"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      For now, is no. <br />
                      but will be available in due time. <br />
                      You can wait patiently for that.
                    </p>
                  </div>
                </div>
              </div>

              {/*<!---Item 4-->*/}
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h2 className="accordion-header" id="heading-4">
                  <button
                    className="accordion-button shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-4"
                    aria-expanded="false"
                    aria-controls="chapter-4"
                  >
                    Can i see all first class student in my department?
                  </button>
                </h2>

                <div
                  id="chapter-4"
                  className="accordion-colapse collapse"
                  aria-labelledby="heading-4"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>
                      Yeah, but under one condition. <br />
                      You have to get permission from the Admin.
                    </p>
                    <p>Note: It will take you like 2 weeks.</p>
                  </div>
                </div>
              </div>
              {/*<!---Item 5-->*/}
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h2 className="accordion-header" id="heading-5">
                  <button
                    className="accordion-button shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#chapter-5"
                    aria-expanded="false"
                    aria-controls="chapter-5"
                  >
                    Where can i see the total number of student in the
                    depatment?
                  </button>
                </h2>

                <div
                  id="chapter-5"
                  className="accordion-colapse collapse"
                  aria-labelledby="heading-5"
                  data-bs-parent="#chapters"
                >
                  <div className="accordion-body">
                    <p>Wait woooo ....oh i get</p>
                    <p>The Page is still under construction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
