import { LevelThree } from "@/models/Tables";
import { redirect } from "next/navigation";

export default async function DeleteBtn3(props) {
  const id = props.id;
  //await mongoose.connect(process.env.MONGODB_URI);

  async function deleting() {
    "use server";

    await LevelThree.deleteOne({ _id: id });
    redirect("/admThree");
  }
  return (
    <form action={deleting}>
      <button type="submit" className="btn-del border-0 mx-2">
        <i class="bi bi-trash"></i>
      </button>
    </form>
  );
}
