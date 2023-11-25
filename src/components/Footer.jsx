import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 ">
              <div class="footer-info rounded-2">
                <h3>Students Records</h3>
                <hr />
                <p class="pb-3">
                  <em>
                    Check out for more address and location.
                  </em>
                </p>
                <p>
                  Rimi Kamanzow <br />
                  Kaduna, Nigeria
                  <br />
                  <br />
                  <strong>Phone:</strong> +234 701 022 8016
                  <br />
                  <strong>Email:</strong> jimiyaks3@gmail.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="bi bi-skype"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-1"></div>
            <div class="col-lg-4  col-6  footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="/about">About us</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="/levelOne">Level One</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="/levelTwo">Level Two</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="/levelThree">Level Three</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>
                  <a href="/levelThree">Level Four</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4  footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>{" "}
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>{" "}
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bi bi-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong>
            <span> Student Records</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="/"> Bala Jimmy Yakubu</a>
        </div>
      </div>
    </footer>
  );
}
