
import { LevelTwo } from "@/models/Tables";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

const Form2 = () => {
  async function newStudent(formData) {
    "use server";

    let fullnames = formData.get("fullnames")?.valueOf();
    let matric = formData.get("matric")?.valueOf();
    let level = formData.get("level")?.valueOf();
    let phone = formData.get("phone")?.valueOf();
    let desc = formData.get("desc")?.valueOf();

    if (!fullnames || !matric || !level || !phone || !desc) {
      console.log("All fields are needed!!!");
      return;
    }

    try {
      let newStudent = new LevelTwo({ fullnames, matric, level, phone, desc });
      await newStudent.save();
      revalidatePath("/levelTwo/allTable")
    } catch (error) {
      console.log(error);
    }
    redirect("/admTwo");
  }

  return (
    <section className=" add-one">
      <div className="add-one container">
        <h1 className="text-center">200 Level Entry Page</h1>
        <form action={newStudent} className="row c-form g-4 mt-2">
          <div className="col-md-6 col-12">
            <label for="fullnames" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control shadow-none  border-info"
              name="fullnames"
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
            />
          </div>

          <div className="col-md-12 col-12 mb-4 text-center">
            <button type="submit" className="btn fw-semibold border-info">
              Save Data
            </button>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form2;
