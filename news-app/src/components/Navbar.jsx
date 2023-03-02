import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Navbar
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="Home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    About{" "}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* this is next part */}
      <div className="container-fluid mt-5">
        <div id="carouselExampleIndicators" className="carousel slide mt-5">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://picsum.photos/1400/500/?mechanical"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Web development</h5>
                <p>
                  Web development is the building and maintenance of websites;
                  it’s the work that happens behind the scenes to make a website
                  look great, work fast and perform well with a seamless user
                  experience. Web developers, or ‘devs’, do this by using a
                  variety of coding languages.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/1400/500"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Front-End</h5>
                <p>
                  A front-end dev takes care of layout, design and interactivity
                  using HTML, CSS and JavaScript. They take an idea from the
                  drawing board and turn it into reality.What you see and what
                  you use, such as the visual aspect of the website, the drop
                  down menus and the text, are all brought together by the
                  front-end dev, who writes a series of programmes to bind and
                  structure the elements.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/1400/500/?technology"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Back-End</h5>
                <p>
                  The backend developer engineers what is going on behind the
                  scenes. This is where the data is stored, and without this
                  data, there would be no frontend. The backend of the web
                  consists of the server that hosts the website, an application
                  for running it and a database to contain the data.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
