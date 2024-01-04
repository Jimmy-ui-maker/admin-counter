import { newStudent } from "@/app/servers/actions3";

export default function Form3() {
  return (
    <section className="section-bg" id="admin">
      <div className="container">
        <div class="section-title text-center">
          <p className="mb-2 h4">300 Level Entry Page</p>
          <h2>Welcome Back</h2>
          <hr className="mb-0" />
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 align-self-start ">
            <div className="card ">
              <div className="card-body">
                <form action={newStudent} className="g-2 ">
                  <div className="col-md-12 ">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control shadow-sm"
                      name="fullnames"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="price" className="form-label">
                      Matric
                    </label>
                    <input
                      type="text"
                      className="form-control  shadow-sm"
                      name="matric"
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="price" className="form-label">
                      Level
                    </label>
                    <input
                      type="text"
                      className="form-control  shadow-sm"
                      name="level"
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="price" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control  shadow-sm"
                      name="phone"
                    />
                  </div>

                  <div className="mb-1">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control  shadow-sm"
                      id="description"
                      rows="3"
                      name="desc"
                    ></textarea>
                  </div>

                  <div className="d-flex align-self-end justify-content-end text-end">
                    <button type="submit" className="btn btn-submit my-2 ">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
