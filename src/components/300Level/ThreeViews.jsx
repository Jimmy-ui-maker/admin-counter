import { LevelThree } from "@/models/Tables";
import Link from "next/link";
import DeleteBtn3 from "./DeleteBtn3";

export default async function ThreeViews() {
  const levelThree = await LevelThree.find();
  const count = await LevelThree.find().count();
  return (
    <section id="adminView" class="adminView section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2 className=" text-uppercase">Level Three Recods Page</h2>
          <hr />
          <Link className=" btn  border-info" href={"/create3"}>
            <i className="bi bi-patch-plus text-dark"></i>
          </Link>

          <p>
            Look around or search your matric
            <br />
            Check yours.
          </p>
          <p className=" mt-2">Total =  {count}</p>
        </div>

        <div class="row g-4">
          {levelThree.map((three) => (
            <div
              key={three.id}
              class="col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img src="/kasu/one-k.jpg" class="img-fluid" alt="" />
                </div>
                <div class="member-info">
                  <h4>{three.matric}</h4>
                  <span>{three.name}</span>
                  <p>{three.level}</p>
                  <p>{three.phone}</p>
                  <p>{three.desc}</p>
                  <div class="social">
                    <Link className=" text-dark" href={`/edit3/${three._id}`}>
                      <i class="bi bi-pen"></i>
                    </Link>

                    <Link href="">
                      <i class="bi bi-instagram"></i>
                    </Link>
                    <Link href="">
                      <i class="bi bi-linkedin"></i>{" "}
                    </Link>
                    <DeleteBtn3 id={three._id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
