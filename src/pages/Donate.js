// src/pages/Donate.jsx
import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: 500,
    message: "",
    method: "bkash",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedMethod, setSubmittedMethod] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/donations/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          amount: formData.amount,
          message: formData.message,
          method: formData.method,
        }),
      });

      // Parse JSON response (only once)
      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error("Error parsing JSON response:", parseError);
        alert("Server returned an invalid response. Please try again later.");
        return;
      } finally {
        setLoading(false);
      }

      // Check response status
      if (!res.ok) {
        alert("Error creating donation: " + (data.error || `Server error: ${res.status} ${res.statusText}`));
        return;
      }

      console.log("Redirecting to:", data.checkoutUrl);

      setSubmittedMethod(formData.method);
      setSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        amount: 500,
        message: "",
        method: "bkash",
      });
    } catch (err) {
      console.error("Error creating donation:", err);
      alert("Failed to create donation. Check backend connection or try again later.");
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <div className="donate-hero">
        <h1>Support the Idris Foundation</h1>
        <p>
          Your donation helps us bring education, healthcare, and environmental
          action to communities in need. Every contribution makes a difference.
        </p>
      </div>

      {/* Donation Form / Confirmation */}
      <section className="donate-section">
        {submitted ? (
          <div className="confirmation-box">
            <h2>🎉 Thank You for Your Donation!</h2>
            <p>
              We truly appreciate your support for the Idris Foundation.
              <br />
              {submittedMethod && (
                <>
                  You chose{" "}
                  <strong>{submittedMethod.toUpperCase()}</strong> as your
                  payment method.
                </>
              )}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="donate-button"
            >
              Make Another Donation
            </button>
          </div>
        ) : (
          <>
            <h2 className="donate-title">Make a Donation</h2>
            <form onSubmit={handleSubmit} className="donate-form">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="donate-input"
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="donate-input"
              />

              <label>Donation Amount (BDT):</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="donate-input"
              />

              <label>Message (optional):</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="donate-textarea"
              />

              <label>Choose Payment Method:</label>
              <select
                name="method"
                value={formData.method}
                onChange={handleChange}
                required
                className="donate-select"
              >
                <option value="bkash">bKash</option>
                <option value="nagad">Nagad</option>
                <option value="rocket">Rocket</option>
                <option value="card">Debit/Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>

              <button
                type="submit"
                className="donate-button"
                disabled={loading}
              >
                {loading ? "Preparing..." : "Donate"}
              </button>
            </form>
          </>
        )}
      </section>
    </>
  );
};

export default Donate;