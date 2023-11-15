import React from "react";

export default function AllTable() {
  return (
    <section
      id="allTable"
      className=" shadow-sm w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container py-5">
        <div class="section-titl text-center">
          <h2>Total Students of 100 Level Students</h2>
          <p>You can search by Matric Number</p>

          <table
            className="table table-bordered table-hover tablestriped"
            border="1"
          >
            <thead>
              <tr>
                <th scope="col"> S/No</th>
                <th scope="col"> Full Name</th>
                <th scope="col"> Matric Number</th>
                <th scope="col"> Status</th>
                <th scope="col"> Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bala Jimmy Yakubu</td>
                <td>Kasu/19/csc/1016</td>
                <td>2nd Class upper</td>
                <td>0807867564</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Bala Jimmy Yakubu</td>
                <td>Kasu/19/csc/1016</td>
                <td>2nd Class upper</td>
                <td>0807867564</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bala Jimmy Yakubu</td>
                <td>Kasu/19/csc/1016</td>
                <td>2nd Class upper</td>
                <td>0807867564</td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
