import { addLevelFour } from "@/app/servers/Actions4";
import React from "react";
import Input from "./Input";

export default function Form4() {
  return (
    <section className="section-bg" id="form3">
      <div className="container">
        <div class="section-title text-center">
          <p className="mb-2">400 Level Entry Page</p>
          <h2>Welcome Back</h2>
          <hr className="mb-0" />
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 align-self-start ">
            <div className="card ">
              <form
                action={addLevelFour}
                className=" bg-gradient align-items-center p-2  rounded"
              >
                <div className="flex mb-4">
                  <div className="col-md-12">
                    <label className=" text-dark">Fullames</label>
                    <Input
                      type="text"
                      placeholder="Fullnames"
                      name="fullnames"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className=" text-dark">Matric</label>
                    <Input type="text" placeholder="Matric" name="matric" />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="col-md-12">
                    <label className=" text-dark">Level</label>
                    <Input type="text" placeholder="level" name="level" />
                  </div>
                  <div className="col-md-12">
                    <label className=" text-dark">Phone</label>
                    <Input
                      type="number"
                      placeholder="Contact Number"
                      name="phone"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className=" text-dark">Desctiption</label>
                    <Input type="text" placeholder="desc" name="desc" />
                  </div>
                </div>
                <button className="btn btn-outline-info" type="submit">
                  Create User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
