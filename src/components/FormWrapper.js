import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./FormWrapper.css";

const FormWrapper = ({ serviceId, teamTemplateId, userTemplateId, publicKey, fields }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send to internal team
    emailjs.sendForm(serviceId, teamTemplateId, e.target, publicKey)
      .then(() => console.log("Team email sent"))
      .catch((err) => console.error("Team email error:", err));

    // Send confirmation to user
    emailjs.send(serviceId, userTemplateId, {
      to_email: e.target.elements["user_email"].value,
      user_name: e.target.elements["user_name"].value,
    }, publicKey)
      .then(() => console.log("User confirmation sent"))
      .catch((err) => console.error("User email error:", err));

    setLoading(false);
    setSuccess(true);
    e.target.reset();
  };

  return (
    <div className="form-wrapper">
      {!success ? (
        <form onSubmit={handleSubmit} className="shared-form">
          {fields.map((field, idx) => (
            <div className="form-group" key={idx}>
              <label>{field.label}</label>
              {field.type === "textarea" ? (
                <textarea name={field.name} placeholder={field.placeholder} required={field.required}></textarea>
              ) : (
                <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required} />
              )}
            </div>
          ))}
          <button type="submit" className="cta-button">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      ) : (
        <div className="success-screen">
          <h2>✅ Thank you!</h2>
          <p>Your submission has been sent successfully. We’ll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default FormWrapper;