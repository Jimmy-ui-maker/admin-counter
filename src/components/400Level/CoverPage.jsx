
export default function CoverPage() {
  return (
    <section className=" shadow-sm w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className=" container levelFour">
        <div className="row justify-content-center align-content-center ">
          <div className="col-lg-6 col-md-6 col-12 text-lg-start text-center">
            <h1 data-aos="fade-up">
              This is 400 Level Student Record App where each records is kept secured in
              the database.
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Get more information by clicking on the get started button. Thanks
              as you obey.
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a
                  href=""
                  className=" text-decoration-none btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 text-lg-start">
            <img
              data-aos="zoom-out"
              data-aos-delay="200"
              src="/img/hero-bg.jpg"
              alt="hero img"
              className=" img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
