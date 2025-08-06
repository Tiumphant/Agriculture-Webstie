import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:8000/api/contact", form);
      setSuccess(res.data.message);
      setForm({ name: "", message: "" });
    } catch (err) {
      setSuccess("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        {success && <p className="response">{success}</p>}
      </form>
    </div>
  );
};

export default Contact;
