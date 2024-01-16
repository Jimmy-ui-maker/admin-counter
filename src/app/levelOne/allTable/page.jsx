import { LevelFour, LevelOne, LevelThree, LevelTwo } from "@/models/Tables";
import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await LevelOne.find();
  const count = await LevelOne.find().count();
  const count2 = await LevelTwo.find().count();
  const count3 = await LevelThree.find().count();
  const count4 = await LevelFour.find().count();

  const agrg = count + count2 + count3 + count4;

  return (
    <>
      <div className="container">
        <h1 className="text-center">100 Level Page</h1>
        <hr />
        <div className="row  mt-2 d-flex justify-content-around">
          <div className="col-lg-5 col-4">
            <h2 className="text-center">Total = {count}</h2>
            <p className="text-center">Aggregate = {agrg}</p>
          </div>
          <div className="col-lg-2 col-4">
            <Link
              className=" text-decoration-none btn border-info"
              href={"/login"}
            >
              Veiw Student
            </Link>
          </div>
          <div className="col-lg-5 col-4">
            <input
              type="text"
              placeholder="Search by matric"
              className=" form-control shadow-none border-info"
            />
          </div>
        </div>
        <div className="row justify-content-center d-flex align-items-center">
          <div className=" col-lg-12  my-2 ">
            <div className="tableheader text-center"></div>
            <table class="table table-bordered border-info table-striped table-light table-hover table-responsive">
              <thead>
                <tr>
                  <th scope="col">Names</th>
                  <th scope="col">Matric No:</th>
                  <th scope="col">Level</th>
                  <th scope="col">Phone No:</th>
                </tr>
              </thead>
              <tbody>
                {data.map((tb) => (
                  <tr key={tb._id}>
                    <td>{tb.fullnames}</td>
                    <td>{tb.matric}</td>
                    <td>{tb.level}</td>
                    <td>{tb.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
