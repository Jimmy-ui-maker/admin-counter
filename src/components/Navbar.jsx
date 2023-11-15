const Navbar = () => {
  return (
    //<!---Navbar-->
    <nav
      className=" navbar navbar-expand-md shadow-sm py-2"
      data-aos="fade-down"
      data-aos-delay="5000"
    >
      <div className="container">
        <a href="/" className="navbar-brand logo">
          Student Details
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="/one" className="nav-link">
                100 Level
              </a>
            </li>

            <li className="nav-item">
              <a href="/two" className="nav-link">
                200 Level
              </a>
            </li>
            <li className="nav-item">
              <a href="/three" className="nav-link">
                300 Level
              </a>
            </li>
            <li className="nav-item">
              <a href="/four" className="nav-link">
                400 Level
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
