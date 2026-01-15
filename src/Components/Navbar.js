import React, { useState, useEffect } from 'react'; // Added useEffect
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash, BsSun, BsMoonStars } from "react-icons/bs"; // Added Theme Icons
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);
    // Initialize theme state from localStorage or default to 'dark'
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    // Effect to update the body attribute and localStorage when theme changes
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Function to toggle between themes
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } 
        else {
            setnavbarblur(false);
        }
    }

    var showMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }
    
    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}> 
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>DS</h1>

            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link to="/"><AiOutlineHome/> Home</Link></li>
                <li onClick={hideMenu}><Link to="/About"><BsPerson/> About</Link></li>
                <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash/> Project</Link></li>
                <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument/> Resume</Link></li>
                
                {/* Theme Toggle Button added at the end of the list */}
                <li onClick={toggleTheme} className='theme-toggle'>
                    {theme === 'dark' ? <BsSun /> : <BsMoonStars />}
                </li>
            </ul>
        </nav>
    );
}

export default Nav;