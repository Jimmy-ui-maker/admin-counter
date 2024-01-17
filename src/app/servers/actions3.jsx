"use server";

import { LevelThree } from "@/models/Tables";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// creating
export async function newStudent(formData) {
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
    let newStudent = new LevelThree({ fullnames, matric, level, phone, desc });
    await newStudent.save();
    revalidatePath("/levelThree/allTable");
  } catch (error) {
    console.log(error);
  }
  redirect("/admThree");
}
