import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaLinkedin, FaInstagram, FaXTwitter, FaFacebookF, FaGithub } from "react-icons/fa6";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedbackStep, setFeedbackStep] = useState("initial"); 
  const [showReasons, setShowReasons] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fr4djrm",
        "template_c80ln19",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "w2YW4L5jrljn8EJqM"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  const handleYesClick = () => {
    setFeedbackStep("thankyou");
  };

  const handleNoClick = () => {
    setShowReasons(true);
  };

  const handleReasonSelect = () => {
    setFeedbackStep("thankyou");
  };

  return (
    <section className="contact">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: <span>rajbharath9644@gmail.com</span></p>
          <p>Phone: <span>+91 90037 79644</span></p>
          <p>Location: <span>Chennai, Tamil Nadu, India</span></p>
        </div>
      </motion.div>

      <br />
      <br />
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/bharath-raj-react-developer/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://github.com/BharathRaj1132" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>

      {/* Feedback Section */}
      <div className="feedback-box">
        {feedbackStep === "initial" && !showReasons && (
          <>
            <p>Did you find this page useful?</p>
            <div className="feedback-buttons">
              <button onClick={handleYesClick}>👍 Yes</button>&nbsp;&nbsp;
              <button onClick={handleNoClick}>👎 No</button>
            </div>
          </>
        )}

        {showReasons && feedbackStep !== "thankyou" && (
          <>
            <p>Why didn't you find this page useful?</p>
            <div className="feedback-reasons">
              {["Boring", "Poorly written", "Off-topic", "Lacks detail", "Too complex", "Other"].map((reason) => (
                <button key={reason} onClick={handleReasonSelect}>{reason}</button>
              ))}
            </div>
          </>
        )}

        {feedbackStep === "thankyou" && (
          <p>Thank you. We appreciate you taking the time to give us feedback.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
