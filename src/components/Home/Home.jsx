import React from 'react'
import "../Home/Home.css"
import img from "../../assets/images/cat.jpg"

const Home = () => {
    return (
        <div id='home' className="main">
            <img className='img-home' src={img} alt="" />
            <div className="intro">
                <p>Welcome Here!</p>
                <div className="name">
                    <h1 className= "my-name">Hello I'm Hamid. </h1>
                   <h2> A full stack developer in Pakistan!</h2>
                </div>
            </div>
        </div>
    )
}

export default Home