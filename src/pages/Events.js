// src/pages/Events.jsx
import React from "react";
import "./Events.css";
import healthCampImg from "../assets/health-camp.jpg";
import treePlantationImg from "../assets/tree-plantation.jpg";
import workshopImg from "../assets/workshop.jpg";
import galaImg from "../assets/gala.jpg";
import eventsHeroImg from "../assets/events-hero.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Health Camp in Dhaka",
      date: "December 10, 2025",
      description:
        "Free medical checkups and awareness sessions for local communities.",
      image: healthCampImg,
    },
    {
      title: "Tree Plantation Drive",
      date: "January 15, 2026",
      description:
        "Join us in planting 500 trees to support environmental sustainability.",
      image: treePlantationImg,
    },
  ];

  const pastEvents = [
    {
      title: "Education Workshop",
      date: "October 2025",
      description:
        "Trained 200 students in digital literacy and basic coding.",
      image: workshopImg,
    },
    {
      title: "Fundraising Gala",
      date: "September 2025",
      description:
        "Raised funds to support healthcare initiatives in rural Bangladesh.",
      image: galaImg,
    },
  ];

  return (
    <div className="events-page">
      {/* ✅ Hero Banner */}
      <section className="events-hero">
        <img src={eventsHeroImg} alt="Events banner" />
        <div className="hero-text">
          <h1>Our Events</h1>
          <p>
            Stay updated with upcoming activities and revisit highlights from
            past events.
          </p>
        </div>
      </section>

      {/* ✅ Upcoming Events */}
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.title} />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>{event.description}</p>
                <button className="event-btn">RSVP</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Past Events */}
      <section className="past-events">
        <h2>Past Events</h2>
        <div className="event-grid">
          {pastEvents.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.title} />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;