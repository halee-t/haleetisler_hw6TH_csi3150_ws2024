import React from "react";
import Background from "../../Assets/HeroSection-bg-image.jpg";

function Hero() {
  return (
    <section className="hero-section">
      <img
        className="hero-img"
        src={Background}
        alt="paper airplane in the sunset"
      />
      <h1 className="hero-header">Welcome to the Travel Blog</h1>
      <h2 className="hero-text">
        Embark on Adventures: Inspiring Tales from Around the Globe. Join us as
        we explore the world's hidden gems, indulge in local cuisines, and
        connect with diverse cultures. Let our travel stories ignite your
        wanderlust and guide you to unforgettable experiences.
      </h2>
    </section>
  );
}

export default Hero;
