import React from 'react'
import "../About/About.css"
import img from "../../assets/images/cat.jpg"

const About = () => {
    return (
        <div id='about' className="contain">
            <h1 className='about-me'>About me</h1>
            <div className="main-2">
                <img className='img2' src={img} alt="" />
                <div className="skills">
                    <div className="about-skills"><p className="skill">HTML & CSS </p><hr style={{ width: "50%" }} /> </div>
                    <div className="about-skills"><p className="skill">React Js </p><hr style={{ width: "45%" }} /> </div>
                    <div className="about-skills"><p className="skill">JavaScript </p><hr style={{ width: "25%" }} /> </div>
                    <div className="about-skills"><p className="skill">Node JS </p><hr style={{ width: "40%" }} /> </div>
                    <div className="about-skills"><p className="skill">C++ </p><hr style={{ width: "30%" }} /> </div>
                </div>
            </div>
            <div className="experience">
                <div className="review">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE</p>

                </div><hr />
                <div className="review">
                    <h1>10+</h1>
                    <p>PROJECTS</p>
                </div><hr />
                <div className="review">
                    <h1>0</h1>
                    <p>HAPPY CLIENTS</p>
                </div>


            </div>
        </div>
    )
}

export default About