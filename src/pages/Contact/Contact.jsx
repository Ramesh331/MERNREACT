import React from 'react';
import './Contact.css'; // Import your CSS file
import Navbar from '../../component/Navbar/Navbar';
import Button from '../../component/Button/N/Button';

const Contact = () => {
  return (
    <div>
      < Navbar />
      <main className="contact">
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>Have any questions? Feel free to reach out to us using the contact information provided below.</p>
        </section>

        <section className="contact-details">
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@digitalpathsala.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-item">
            <h3>Address</h3>
            <p>123 Street, City, Country</p>
          </div>
        </section>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            < Button title="Submit" />
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Digital Pathsala</p>
      </footer>
    </div>
  );
}

export default Contact;
