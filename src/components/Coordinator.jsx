import React from "react";

export default function Coordinator() {
  return (
    <section id="coordinator" class="coordinator">
      <div class="container">
        <div class="section-title" data-aos="fade-in" data-aos-delay="100">
          <h2>Level Coordinator</h2>
          <hr />
          <p className=" mt-4">
            Bellow are the list of level coordinator for all levels. <br />
            Check yours.
          </p>
        </div>

        <div class="row g-4">
          <div class=" col-12 col-lg-3 col-md-6">
            <div class="member" data-aos="fade-up">
              <div class="pic">
                <img
                  src="/img/team/sirj.jpg"
                  class="img-fluid c-img"
                  alt=""
                />
              </div>
              <div class="member-info">
                <h4>Bala Jimmy Yakubu</h4>
                <span>100 Level Coordinator</span>
                <div class="address">
                  <a href="">Office Address: 001 CSC Department</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 col-md-6">
            <div class="member" data-aos="fade-up" data-aos-delay="150">
              <div class="pic">
                <img src="/img/team/besty.jpg" class="img-fluid c-img" alt="" />
              </div>
              <div class="member-info">
                <h4>Joy Jimmy</h4>
                <span>200 Level Coordinator</span>
                <div class="address">
                  <a href="">Office Address: 002 CSC Department</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 col-md-6">
            <div class="member" data-aos="fade-up" data-aos-delay="300">
              <div class="pic">
                <img src="/img/team/loved.jpg" class="img-fluid c-img" alt="" />
              </div>
              <div class="member-info">
                <h4>Favour Daniel</h4>
                <span>300 Level Coordinator</span>
                <div class="address">
                  <a href="">Office Address: 003 CSC Department</a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 col-md-6">
            <div class="member" data-aos="fade-up" data-aos-delay="300">
              <div class="pic">
                <img src="/img/team/fff2.jpg" class="img-fluid c-img" alt="" />
              </div>
              <div class="member-info">
                <h4>Favour Yohanna</h4>
                <span>400 Level Coordinator</span>
                <div class="address">
                  <a href="">Office Address: 004 CSC Department</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
