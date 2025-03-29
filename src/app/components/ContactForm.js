import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">Stay In Touch</h2>
        <p className="contact-description">
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input className="input"
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input className="input"
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input className="input"
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input className="input"
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea className="input"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        ></textarea>
        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
