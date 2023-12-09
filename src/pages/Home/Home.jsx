import Button from '../../component/Button/N/Button'
import Navbar from '../../component/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <body>
        < Navbar />
        < Button  title = "Register " />

<main>
    <section className="hero">
        <h1>Welcome to Digital Pathsala</h1>
        <p>Unlock the world of digital learning!</p>
        <a href="#" className="btn">Explore Courses</a>
    </section>

    <section className="courses">
        <h2>Featured Courses</h2>
        <div className="course-card">
            <img src="course1.jpg" alt="Course 1" />
            <h3>Course Title</h3>
            <p>Description of the course goes here.</p>
            <a href="#" className="btn">Learn More</a>
        </div>
        {/* <!-- Repeat course cards as needed --> */}
    </section>
</main>

<footer>
    <p>&copy; 2023 Digital Pathsala</p>
</footer>
</body>
  )
}

export default Home