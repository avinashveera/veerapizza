import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-us">
      <header>
        <h1>Contact Us</h1>
        <nav>
          <a href="/">Home</a> |
          <a href="/menu">Menu</a> |
          <a href="/order">Order Now</a>
        </nav>
      </header>
      <main>
        <section id="contact-info">
          <h2>Contact Information</h2>
          <p>802301 katira more</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@pizzadeliveryapp.com</p>
        </section>
        <section id="contact-form">
          <h2>Contact Form</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Pizza Delivery App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
