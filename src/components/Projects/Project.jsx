import React from 'react'
import "../Projects/Project.css"
import work_img from '../../assets/images/img1.png'
import work_img2 from '../../assets/images/img2.png'
import work_img3 from '../../assets/images/img3.png'
import work_img4 from '../../assets/images/img4.png'
import work_img5 from '../../assets/images/img5.png'

const Project = () => {
  return (
    <div id='projects' className="page-3">
      <h1>My Projects</h1>
      <div className="my-work">
        <div className="work-img">
          <div className="work"><img src={work_img3} alt="" /></div>
          <div className="work"><img src={work_img2} alt="" /></div>
          <div className="work"><img src={work_img} alt="" /></div>
          <div className="work"><img src={work_img5} alt="" /></div>
          <div className="work"><img src={work_img4} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Project