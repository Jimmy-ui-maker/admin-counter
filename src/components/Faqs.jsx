import React from "react";

export default function Faqs() {
  return (
    <section
      id="accord"
      className=" shadow-sm w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container my-4">
        {/*<!---Text Head-->*/}
        <div className="text-center">
          <h2>Frequently ask question</h2>
          <p className="lead ">
            Answers to some of your questions here
          </p>
        </div>
        {/*<!---Image Head-->*/}
        <div className="row mt-2 g-2 justify-content-around align-items-center">
          <div className="col-12 col-lg-4 shadow">
            <img
              src="/images/hero-img.png"
              alt="accord"
              className="img-fluid"
            />
          </div>

          {/*<!---Accordion-->*/}
          
            <div className="col-lg-5 col-12 shadow ">
              <div className="accordion " id="chapters">
                {/*<!---Item 1-->*/}
                <div className="accordion-item">
                  {/*<!---Heading-->*/}
                  <h2 className="accordion-header" id="heading-1">
                    <button
                      className="accordion-button shadow-none c-body"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-1"
                      aria-expanded="true"
                      aria-controls="chapter-1"
                    >
                      Chapter - 1 - Your First Web Page
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat beatae modi at tempore doloribus, expedita
                        sapiente sint velit vel ipsa.
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro beatae aliquam blanditiis dignissimos
                        fugiat, repudiandae exercitationem dolorum ut velit
                        maxime.
                      </p>
                    </div>
                  </div>
                </div>

                {/*<!---Item 2-->*/}
                <div className="accordion-item">
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
                      Chapter - 2 - Mastering CSS
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat beatae modi at tempore doloribus, expedita
                        sapiente sint velit vel ipsa.
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro beatae aliquam blanditiis dignissimos
                        fugiat, repudiandae exercitationem dolorum ut velit
                        maxime.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-3"
                      aria-expanded="false"
                      aria-controls="chapter-3"
                    >
                      Chapter - 3 - The Power of JavaScript
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat beatae modi at tempore doloribus, expedita
                        sapiente sint velit vel ipsa.
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro beatae aliquam blanditiis dignissimos
                        fugiat, repudiandae exercitationem dolorum ut velit
                        maxime.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-4">
                    <button
                      className="accordion-button shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-4"
                      aria-expanded="false"
                      aria-controls="chapter-4"
                    >
                      Chapter - 4 - Data to Firebase
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat beatae modi at tempore doloribus, expedita
                        sapiente sint velit vel ipsa.
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro beatae aliquam blanditiis dignissimos
                        fugiat, repudiandae exercitationem dolorum ut velit
                        maxime.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-5">
                    <button
                      className="accordion-button shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-5"
                      aria-expanded="false"
                      aria-controls="chapter-5"
                    >
                      Chapter - 5 - Using Authentication
                    </button>
                  </h2>

                  <div
                    id="chapter-5"
                    className="accordion-colapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat beatae modi at tempore doloribus, expedita
                        sapiente sint velit vel ipsa.
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro beatae aliquam blanditiis dignissimos
                        fugiat, repudiandae exercitationem dolorum ut velit
                        maxime.
                      </p>
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
