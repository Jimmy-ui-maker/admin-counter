import { LevelThree } from "@/models/Tables";
import { redirect } from "next/navigation";

export default async function page({ params }) {
  const updThree = await LevelThree.findOne({ _id: params.id });

  async function updateStudent(formData) {
    "use server";
    let fullnames = formData.get("fullnames")?.valueOf();
    let matric = formData.get("matric")?.valueOf();
    let level = formData.get("level")?.valueOf();
    let phone = formData.get("phone")?.valueOf();
    let desc = formData.get("desc")?.valueOf();
    await LevelThree.findByIdAndUpdate(
      { _id: params.id },
      { fullnames, matric, level, phone, desc }
    );

    redirect("/admThree");
  }
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
                <form action={updateStudent} className="g-2 ">
                  <div className="col-md-12 ">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control shadow-sm"
                      name="fullnames"
                      defaultValue={updThree?.fullnames}
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
                      defaultValue={updThree?.matric}
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
                      defaultValue={updThree?.level}
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
                      defaultValue={updThree?.phone}
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
                      defaultValue={updThree?.desc}
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
