
import { LevelTwo } from "@/models/Tables";
import { redirect } from "next/navigation";

export default async function DeleteBtn2(props) {
  const id = props.id;
  //await mongoose.connect(process.env.MONGODB_URI);

  async function deleting() {
    "use server";

    await LevelTwo.deleteOne({ _id: id });
    redirect("/admTwo");
  }
  return (
    <form action={deleting}>
      <button type="submit" className="btn-del border-0 mx-2">
      <i class="bi bi-trash"></i>
      </button>
    </form>
  );
}
