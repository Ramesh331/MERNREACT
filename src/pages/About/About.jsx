import React from 'react'
import Navbar from '../../component/Navbar/Navbar'

const About = () => {
  return (
    <body>
    < Navbar />

    <main className="about">
        <section className="about-info">
            <h2>About Us</h2>
            <p>Welcome to Digital Pathsala! We are a team of passionate educators dedicated to providing quality digital
                learning experiences. Our mission is to empower individuals by offering comprehensive online courses in
                various fields.</p>
            <p>With years of experience in e-learning, our instructors curate courses that cater to beginners as well as
                advanced learners. We believe in interactive, engaging, and practical teaching methods to ensure
                successful learning outcomes.</p>
        </section>

        <section className="team">
            <h2>Our Team</h2>
            <div className="member">
                <img src="team_member1.jpg" alt="Team Member 1" />
                <h3>John Doe</h3>
                <p>Founder & CEO</p>
            </div>
            {/* <!-- Add more team members --> */}
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Digital Pathsala</p>
    </footer>
</body>
  )
}

export default About