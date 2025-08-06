import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundimage from "../page/asset/newimages.webp";
import "./dash.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-vh-100 bg-light text-dark">
      <div className="min-vh-100 position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(to right, #d4fc79, #96e6a1)",
            zIndex: -2,
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: -1,
          }}
        ></div>
        <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white shadow">
          <h1 className="h4 text-success">
            Welcome, {user?.firstName || "User"} 👋
          </h1>
          <button
            onClick={handleLogout}
            className="btn btn-danger rounded-pill px-4"
          >
            Logout {user?.firstName ? `(${user.firstName})` : ""}
          </button>
        </header>
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container">
            <Link to="/" className="navbar-brand text-success fw-bold">
              🌾 Rural Connect
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-success">
                    🏠 Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link text-success">
                    🛠️ Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link text-success">
                    🛒 Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/productlist" className="nav-link text-success">
                    📋 Product List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bookingform" className="nav-link text-success">
                    BookingForm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-success">
                    📞 Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>{" "}
        {/* About Section */}
        <section className="container my-5">
          <h2 className="h5 text-success mb-3">About Us</h2>

          <div
            id="aboutCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="text-success">🌿 Our Mission</h4>
                    <p>
                      We aim to uplift rural communities by providing accessible
                      healthcare, agricultural support, and economic empowerment
                      through skill-building.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://i.guim.co.uk/img/media/d5fbb6afdf7a70f80c9fd5f08498de23ec03c460/0_157_3353_2012/master/3353.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c2343c467b49d2aae916df87bd47a775"
                      className="d-block w-100 img-fluid"
                      alt="Mission"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="text-success">👥 Our Vision</h4>
                    <p>
                      Creating self-reliant villages through knowledge,
                      technology, and sustainable development. A future where
                      rural doesn't mean remote.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://www.tripsavvy.com/thmb/Fv-gVk_EO8Lko1T_7XOJuvyyC4M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-520890970-59b8ecef6f53ba0011ba2fc8.jpg"
                      className="d-block w-100 img-fluid"
                      alt="Vision"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="text-success">💡 Our Impact</h4>
                    <p>
                      Over 10,000+ rural families benefited from our services,
                      including training programs, product access, and
                      government scheme assistance.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="https://smartgovernance.in/wp-content/uploads/2020/09/download-1.jpg"
                      className="d-block w-100 img-fluid"
                      alt="Impact"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#aboutCarousel"
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
              data-bs-target="#aboutCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/* Services Section */}
        <section className="container my-5">
          <h2 className="text-center text-success mb-4">Our Services</h2>
          <p
            className="text-center text-muted mb-4"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            We are committed to empowering rural communities by offering
            essential services to support livelihoods, healthcare, education,
            and skill development.
          </p>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
            {[
              {
                title: "Agricultural Support",
                img: "https://cdn-icons-png.flaticon.com/512/2909/2909762.png",
                text: "Tools, training & subsidies for farmers.",
              },
              {
                title: "Health Checkup Camps",
                img: "https://cdn-icons-png.flaticon.com/512/3751/3751541.png",
                text: "Free regular health checkups in rural areas.",
              },
              {
                title: "Govt Schemes Assistance",
                img: "https://cdn-icons-png.flaticon.com/512/3213/3213484.png",
                text: "Help with applying for welfare schemes.",
              },
              {
                title: "Women Empowerment",
                img: "https://cdn-icons-png.flaticon.com/512/921/921748.png",
                text: "Support for rural women through resources.",
              },
              {
                title: "Skill Development",
                img: "https://cdn-icons-png.flaticon.com/512/4525/4525483.png",
                text: "Training in IT, tailoring, and crafts.",
              },
            ].map((service, index) => (
              <div className="col" key={index}>
                <div className="card h-100 text-center p-2 border-light shadow-sm small-card">
                  <img
                    src={service.img}
                    className="card-img-top mx-auto"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      marginTop: "10px",
                    }}
                    alt={service.title}
                  />
                  <div className="card-body py-2 px-2">
                    <h6 className="card-title fw-semibold">{service.title}</h6>
                    <p className="card-text small text-muted">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* News Section */}
        <section className="container my-5">
          <h2 className="h5 text-success mb-4">News & Updates</h2>

          <div className="mb-4 row align-items-center">
            <div className="col-md-4">
              <img
                src="https://khetigaadi.com/news/wp-content/uploads/2024/07/Avail-Subcidy-On-natural-farming-1.jpg"
                alt="Farming Subsidy"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h5 className="text-dark">🌾 New Farming Subsidy Announced</h5>
              <p className="mb-0">
                Farmers can now avail 60% subsidy for solar-powered equipment.
              </p>
            </div>
          </div>

          <div className="mb-4 row align-items-center">
            <div className="col-md-4">
              <img
                src="https://www.shutterstock.com/image-photo/indian-pediatrician-doctor-examine-new-260nw-2283013399.jpg"
                alt="Health Camp"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h5 className="text-dark">🩺 Free Health Camp This Weekend</h5>
              <p className="mb-0">
                Doctors visiting 20+ villages for checkups and free medicine.
              </p>
            </div>
          </div>

          <div className="mb-4 row align-items-center">
            <div className="col-md-4">
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/story-of-the-day-01245879-16x9_0.jpg?VersionId=zCmohZHMCMvpdZ9u_kNHkUvKFgq.Zf3k&size=690:388"
                alt="Skill Training"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h5 className="text-dark">📚 Rural Youth Skill Training Open</h5>
              <p className="mb-0">
                Register for free training in IT, tailoring, and crafts.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="container my-5 contact-section">
          <div className="row">
            <div className="col-md-6 animate-left">
              <h2 className="h5 text-success mb-3">Contact Us</h2>
              <p>📍 Address: Village Service Center, Greenfield, India</p>
              <p>📞 Helpline: +91-9876543210</p>
            </div>
            <div className="col-md-6 animate-right">
              <form className="mt-4">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <footer>
            <p>© 2025 MyRuralApp. All rights reserved.</p>
          </footer>
        </section>
      </div>
    </div>
  );
}
