"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Instructor = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const columns = [
    {
      name: "Matric",
      selector: (row) => row.matric,
      sortable: true,
      id: "header",
    },
    {
      name: "Names",
      selector: (row) => row.fullnames,
      sortable: false,
      id: "header",
      width: 300,
    },
    {
      name: "Level",
      selector: (row) => row.level,
      sortable: false,
      id: "header",
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: false,
      id: "header",
    },
  ];

  const [records, setRecords] = useState([]);

  const [record, setRecord] = useState([]);

  {/**useEffect(() => {
    fetch("/api/get1")
      .then((Response) => Response.json())
      .then((Response) => {
        setRecords(Response);
        setRecord(Response);
      });
  }, []); */}

  const handleFilter = (event) => {
    const newData = records.filter((row) => {
      return (
        row.matric.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.fullnames.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setRecord(newData);
  };
  return (
    <div className=" mt-5 container shadow" id="instructor">
      <div className="row  d-flex flex-row">
        <div className="col-12">
          <Link className="btn border-0   shadow btn-sm mx-1" href="/">
            <i className="bi bi-arrow-left mx-1 text-dark"> </i>
          </Link>

          <button
            type="button"
            class="btn btl w-100 rounded-0 btn-lg position-relative mt-2 mb-2"
          >
            100 Level Table View <br />
            <br />
            <div className="shadow-none mb-1 mt-0">
              <input
                type="text"
                onChange={handleFilter}
                className="shadow border-0 p-2 rounded-2 col-12 col-md-4 text-dark"
                placeholder="Search using matric or names"
              />
            </div>
          </button>
        </div>
      </div>

      <h6 className="text-uppercase my-1">Your Courses</h6>
      <div className="card text-start con rounded-0">
        {isClient && (
          <DataTable
            resizable
            columns={columns}
            data={record}
            expandableRowsComponent={true}
            fixedHeader
            pagination
          ></DataTable>
        )}
      </div>
    </div>
  );
};

export default Instructor;
