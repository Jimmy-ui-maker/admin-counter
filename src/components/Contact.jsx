import React from "react";

export default function Contact() {
  return (
    <section className=" ">
      <div className="container contact">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow mt-5">
              <div className="card-body c-cbody">
                <h1 className="text-center mb-2">Contact Admin</h1>
                <hr />

                <form>
                  <div className="mb-2">
                    <label>Names</label>
                    <input type="text" className="form-control shadow-none" />
                  </div>

                  <div className="mb-2">
                    <label>Matric Number</label>
                    <input type="text" className="form-control shadow-none" />
                  </div>

                  <div className="mb-2">
                    <label>Email</label>
                    <input type="email" className="form-control shadow-none" />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn ">
                      <span>Submit</span>
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
