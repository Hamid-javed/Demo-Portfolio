import React, { useRef } from 'react'
import "./Navbar.css"
import open from "../../assets/images/menu-3-line.png"
import close from "../../assets/images/close-line.png"

export const Navbar = () => {

  const menuOpen = useRef();
  const menuClose = useRef();
  const slider = useRef();

  function menuBaropen() {
    menuOpen.current.style.display = "none";
    menuClose.current.style.display = "block";
    slider.current.style.right = "0px"

  }
  function menuBarclose() {
    menuOpen.current.style.display = "block";
    menuClose.current.style.display = "none";
    slider.current.style.right = "-350px"
  }

  return (
    <>
      <nav>
        <div id='navbar' className="head">Experts</div>
        <ul ref={slider}>
          <img ref={menuOpen} onClick={menuBaropen} className='open-menu' src={open} alt="" />
          <img ref={menuClose} onClick={menuBarclose} className='close-menu' src={close} alt="" />
          <li>Home</li>
          <li> <a href="#about">About</a></li>
          <li> <a href="#projects">Projects</a></li>
          <li>Experience</li>
        </ul>
        <div className="contact-me"> <a href="#contact">Contact me</a></div>
      </nav>
    </>
  )
}

export default Navbar