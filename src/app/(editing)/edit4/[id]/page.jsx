import React from "react";
import { getSingleFour } from "@/components/400Level/FetchData";
import { updateLevelFour } from "@/app/servers/Actions4";
import Input from "@/components/400Level/Input";

export default async function SingleFourLevel({ params }) {
  const { id } = params;
  const levelFour = await getSingleFour(id);
  return (
    <section className="section-bg" id="form3">
      <div className="container">
        <div class="section-title text-center">
          <p className="mb-2">400 Level Update Page</p>
          <h2>Welcome Back</h2>
          <hr className="mb-0" />
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 align-self-start ">
            <div className="card ">
              <form
                action={updateLevelFour}
                className=" bg-gradient align-items-center p-2  rounded"
              >
                <div className="flex mb-4">
                  <div className="col-md-12">
                  <input type='text' name='id' hidden value={levelFour.id} />
                    <label className=" text-dark">Fullames</label>
                    <Input
                      type="text"
                      placeholder={levelFour.fullnames}
                      name="fullnames"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className=" text-dark">Matric</label>
                    <Input type="text" placeholder={levelFour.matric} name="matric" />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="col-md-12">
                    <label className=" text-dark">Level</label>
                    <Input type="text" placeholder={levelFour.level} name="level" />
                  </div>
                  <div className="col-md-12">
                    <label className=" text-dark">Phone</label>
                    <Input
                      type="number"
                      placeholder={levelFour.phone}
                      name="phone"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className=" text-dark">Desctiption</label>
                    <Input type="text" placeholder={levelFour.desc} name="desc" />
                  </div>
                </div>
                <button className="btn btn-outline-info" type="submit">
                  Update User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
