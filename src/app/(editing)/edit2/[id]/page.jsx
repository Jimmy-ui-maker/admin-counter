import { LevelTwo } from "@/models/Tables";
import Link from "next/link";

import { redirect } from "next/navigation";

export default async function page({ params }) {
  const updTwo = await LevelTwo.findOne({ _id: params.id });

  async function updateStudent(formData) {
    "use server";
    let fullnames = formData.get("fullnames")?.valueOf();
    let matric = formData.get("matric")?.valueOf();
    let level = formData.get("level")?.valueOf();
    let phone = formData.get("phone")?.valueOf();
    let desc = formData.get("desc")?.valueOf();
    await LevelTwo.findByIdAndUpdate(
      { _id: params.id },
      { fullnames, matric, level, phone, desc }
    );

    redirect("/admTwo");
  }
  return (
    <section className=" add-one">
      <div className="add-one container">
        <h1 className="text-center">Students Edit Page</h1>
        <form action={updateStudent} className="row c-form g-4 mt-2">
          <div className="col-md-6 col-12">
            <label for="fullnames" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control shadow-none  border-info"
              name="fullnames"
              defaultValue={updTwo?.fullnames}
            />
          </div>

          <div className="col-md-6 col-12">
            <label for="matric" className="form-label">
              Matric Number
            </label>
            <input
              type="text"
              className="form-control shadow-none  border-info"
              name="matric"
              defaultValue={updTwo?.matric}
            />
          </div>

          <div className="col-md-6 col-12">
            <label for="level" className="form-label">
              Level
            </label>
            <input
              type="text"
              className="form-control shadow-none  border-info"
              name="level"
              defaultValue={updTwo?.level}
            />
          </div>

          <div className="col-md-6 col-12">
            <label for="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control shadow-none  border-info"
              name="phone"
              defaultValue={updTwo?.phone}
            />
          </div>

          <div className="col-md-12 col-12">
            <label for="desc" className="form-label">
              Description
            </label>
            <textarea
              className="form-control  border-info shadow-none"
              name="desc"
              rows="5"
              defaultValue={updTwo?.desc}
            />
          </div>

          <div className="col-md-12 col-12 mb-4 text-center">
            <button type="submit" className="btn fw-semibold border-info">
              Update Data
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
