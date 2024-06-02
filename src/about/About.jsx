import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-us">
      <header>
        <h1>About Us</h1>
        <nav>
          <a href="/">Home</a> |
          <a href="/menu">Menu</a> |
          <a href="/order">Order Now</a>
        </nav>
      </header>
      <main>
        <section id="story">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies urna. Duis nec felis risus. Nullam sit amet massa vel ligula fermentum tincidunt et a justo. Fusce at nunc feugiat, congue turpis id, finibus felis.</p>
        </section>
        <section id="team">
          <h2>Our Team</h2>
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <p>shivam pradhan</p>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <p>veera</p>
            <p>Head of Operations</p>
          </div>
        </section>
        <section id="mission">
          <h2>Our Mission</h2>
          <p>Our mission is to deliver delicious pizzas to our customers while providing exceptional service and a memorable experience.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Pizza Delivery App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
