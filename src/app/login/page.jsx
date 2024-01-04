
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "@/components/credentials/LoginForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function page() {
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");
  
  return (
    <div>
      <LoginForm />
    </div>
  )
}
