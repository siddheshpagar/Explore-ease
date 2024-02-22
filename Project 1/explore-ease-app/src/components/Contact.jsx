import React, { useState } from "react";
import "../Css/Contactus.css";
import { useNavigate } from "react-router-dom";
import { sendFeedbackData } from "../services/User";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavigationBar } from "./NavigationBar";

export function ContactUs() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({ name: "", phonenumber: "", email: "", subject: "", message: "" });

  const handleChange = (event) => {
    setFeedback({ ...feedback, [event.target.name]: event.target.value });
    console.log('feedback', feedback)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await sendFeedbackData(feedback);
      console.log('Response:', response); // Log the response
      if (response.data.status) {
        // Display success toast
        toast.success("Thanks for your feedback. Your feedback is valuable to us.", {
          autoClose: 5000,
          onClose: () => {
            console.log('Toast closed');
            // Navigate after toast is closed
            navigate("/");
          }
        });
      }
    } catch (error) {
      console.error('ERROR', error);
    }
  };

  return (
    <div className="maincontactus">
      <NavigationBar></NavigationBar>
      <ToastContainer />
      <div className="containercontact">
        <h1>Connect With us</h1>
        <p>
          We would love to respond to your queries and help you succeed. <br />
          Feel free to get in touch with us
        </p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your Request</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input type="String" name="phonenumber" placeholder="Enter your Number" maxLength={10} minLength={10} onChange={handleChange} required />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>E-mail</label>
                  <input type="email" name="email" placeholder="Enter Your Email" onChange={handleChange} required />
                </div>
                <div className="input-group">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="Enter Your Subject" onChange={handleChange} required />
                </div>
              </div>

              <label>Message</label>
              <textarea rows="2" name="message" placeholder="Text Area" onChange={handleChange} required></textarea>
              <button style={{ border: "0", borderRadius: "15px" }} className="btntag" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>Contactus@example.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <td>Fax</td>
                  <td>+1-907-555-1234 for the US and +44-20-1224-3456 for the UKDelhi</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                  Technopark Trivandrum, Technopark Rd, opp. Thejaswini, Technopark Campus, Kazhakkoottam, Thiruvananthapuram, Kerala 695581                  </td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>
                    <iframe
                      title="Your Location Map"
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.8639182284053!2d76.880988!3d8.556100000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befa80ee57a3%3A0x5a99df69e9061e9f!2sC-DAC%20Technopark!5e0!3m2!1sen!2sin!4v1708029883153!5m2!1sen!2sin`}
                      width="400"
                      style={{ border: "0", borderRadius: "15px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
