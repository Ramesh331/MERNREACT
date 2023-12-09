import React from 'react'

export const Navbar = () => {
  return (
    <header>
    <nav>
        <div className="logo">
            <h1>Digital Pathsala</h1>
        </div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/contact">contact</a></li>
            
        </ul>
    </nav>
</header>
  )
}



export default Navbar