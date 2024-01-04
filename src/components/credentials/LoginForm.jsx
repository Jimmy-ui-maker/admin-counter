"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" shadow-sm w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card border-0 shadow mt-5 ">
              <div className="card-body bg-transparent">
                <h1 className="text-center text-success mb-4">Login</h1>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="text-success">Your Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control shadow-none border-info text-success"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-success">Your Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control shadow-none border-info text-success"
                    />
                  </div>
                  {error && <div className=" text-danger">{error}</div>}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-outline-success">
                      Login
                    </button>
                  </div>
                  <Link className=" mt-2 fs-6; text-decoration-none nav-link" href={"/register"}>
                    Don't have an account?{" "}
                    <span className="underline">Register</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
