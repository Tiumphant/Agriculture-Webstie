import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const Api = "http://localhost:8000/api/registration";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !email || !password || !contact) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(Api, {
        firstName,
        lastName,
        email,
        password,
        contact,
      });

      if (response.data?.result === "done") {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/login");
      } else {
        setError("Registration failed!");
      }
    } catch (err) {
      console.error("Registration error", err.message);
      setError("Registration failed");
    }
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <h3 className="text-secondary mb-4">Registration Form</h3>

      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="firstName" className="col-sm-4 col-form-label">
              First Name
            </label>
            <div className="col-sm-8">
              <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="lastName" className="col-sm-4 col-form-label">
              Last Name
            </label>
            <div className="col-sm-8">
              <input
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-4 col-form-label">
              Email
            </label>
            <div className="col-sm-8">
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-4 col-form-label">
              Password
            </label>
            <div className="col-sm-8">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4 row">
            <label htmlFor="contact" className="col-sm-4 col-form-label">
              Contact No.
            </label>
            <div className="col-sm-8">
              <input
                id="contact"
                type="tel"
                className="form-control"
                placeholder="Contact number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              transition: "0.3s ease",
              fontSize: "14px",
              padding: "10px 0",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Register
          </button>

          <div className="text-center mt-3">
            <Link to="/login" style={{ fontSize: "13px" }}>
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
