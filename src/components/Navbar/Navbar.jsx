import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import open from "../../assets/images/menu-3-line.png";
import close from "../../assets/images/close-line.png";

export const Navbar = () => {
  const menuOpen = useRef();
  const menuClose = useRef();
  const slider = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Track window size to conditionally display menu icons
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    // Check the initial window size on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function menuBaropen() {
    menuOpen.current.style.display = "none";
    menuClose.current.style.display = "block";
    slider.current.style.right = "0px";
  }
  function menuBarclose() {
    menuOpen.current.style.display = "block";
    menuClose.current.style.display = "none";
    slider.current.style.right = "-350px";
  }

  return (
    <nav>
      <div id="navbar" className="head">
        Experts
      </div>
      <ul ref={slider}>
        {isMobile && (
          <>
            <img
              ref={menuOpen}
              onClick={menuBaropen}
              className="open-menu"
              src={open}
              alt="open menu"
            />
            <img
              ref={menuClose}
              onClick={menuBarclose}
              className="close-menu"
              src={close}
              alt="close menu"
            />
          </>
        )}
        <li>Home</li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>Experience</li>
      </ul>
      <div className="contact-me">
        <a href="#contact">Contact me</a>
      </div>
    </nav>
  );
};

export default Navbar;
