import React from 'react';
import './policy.css';

const TermsAndPolicy = () => {
  return (
    <div className="terms-and-policy">
      <header>
        <h1>Terms and Policy</h1>
        <nav>
          <a href="/">Home</a> |
          <a href="/menu">Menu</a> |
          <a href="/order">Order Now</a>
        </nav>
      </header>
      <main>
        <section>
          <h2>Terms of Service</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies urna. Duis nec felis risus. Nullam sit amet massa vel ligula fermentum tincidunt et a justo. Fusce at nunc feugiat, congue turpis id, finibus felis.</p>
        </section>
        <section>
          <h2>Privacy Policy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ultricies urna. Duis nec felis risus. Nullam sit amet massa vel ligula fermentum tincidunt et a justo. Fusce at nunc feugiat, congue turpis id, finibus felis.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Pizza Delivery App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsAndPolicy;
