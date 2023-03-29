import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const heroImage = require("./assets/heroImage3.jpg");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    emailjs
      .send(
        "service_uugvi4h",
        "template_j7piptl",
        {
          from_name: name,
          from_email: email,
          message,
          to_email: "jessestratford6366@gmail.com",
        },
        "iv-EXYNc1wSdP8cUd"
      )
      .then(
        () => {
          alert("Email sent!");
        },
        (emailjsError: any) => {
          console.error(emailjsError);
          alert("Email failed to send.");
        }
      );
  };

  return (
    <div className="ContactMeContainer">
      <div className="ContactMeHeader">
        <h1>Contact Me</h1>
      </div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
