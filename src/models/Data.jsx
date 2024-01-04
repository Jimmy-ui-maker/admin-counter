import React from "react";
import { LevelOne } from "./Tables";
import { NextResponse } from "next/server";

export default async function Data() {
  const res = await LevelOne.find();
  
  return (
    <div className=" container mt-5 text-center">
      <div className="row">
        <div className="col-lg-6">
           
        </div>
      </div>
    </div>
  );
}
