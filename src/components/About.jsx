import React from 'react'
import './styles/about.css';
import img1 from'../images/Youtube (1).png';
import img2 from'../images/QuizApp.png';
import img3 from'../images/WeatherApp.png';

const About = () => {
  return (
    <div className='body'>
      <div className="Interval1">

      </div>
      <div className="about">
        <div className="descHead">
          About Me
        </div>
        <div className="aboutSection1">
          <b className='firstLetter'>L</b>orem ipsum dolor sit amet consectetur adipisicing elit. Quidem eligendi inventore accusamus ipsum autem tempore ad doloremque nesciunt officiis asperiores, totam officia incidunt eaque mollitia, facere velit repudiandae optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sed, rerum, eum beatae accusamus ipsa fugit asperiores praesentium nostrum molestias iste dignissimos! Quos hic ducimus voluptate, corporis atque labore odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, non impedit a exercitationem aut architecto minima qui ratione fuga mollitia magni ducimus nam eveniet ex deleniti itaque! Excepturi, aliquid hic?

        </div>
        <div className="descHead">
          My Skills
        </div>
        <div className="skillSection">
          <div className="skillSection1">
            <div className="subjects">
              <p className="subject">
                C
              </p>
              <div className="graph" style={{ width: '80%' }}>

              </div>
            </div>
            <div className="subjects">
              <p className="subject">
                Java
              </p>
              <div className="graph" style={{ width: '85%' }}>

              </div>
            </div>
            <div className="subjects">
              <p className="subject">
                C++
              </p>
              <div className="graph" style={{ width: '65%' }}>

              </div>
            </div>
            <div className="subjects">
              <p className="subject">
                Shell
              </p>
              <div className="graph" style={{ width: '35%' }}>

              </div>
            </div>
            <div className="subjects">
              <p className="subject">
                Python
              </p>
              <div className="graph" style={{ width: '45%' }}>

              </div>
            </div>
          </div>
          <div className="skillSection2">
          <div className="subjects">
              <p className="subject">
                HTML
              </p>
              <div className="graph" style={{ width: '90%' }}>

              </div>
            </div>
            <div className="subjects">
              <p className="subject">
                CSS
              </p>
              <div className="graph" style={{ width: '80%' }}>

              </div>
            </div>
            <div className="subjects">
              <p className="subject">
                JavaScript
              </p>
              <div className="graph" style={{ width: '75%' }}>

              </div>
            </div>
            <div className="subjects">
              <p className="subject">
                REACT
              </p>
              <div className="graph" style={{ width: '70%' }}>

              </div>
            </div>
            <div className="subjects">
              <p className="subject">
                DBMS
              </p>
              <div className="graph" style={{ width: '75%' }}>

              </div>
            </div>
          </div>
        </div>
        <div className="descHead">
          My Projects
        </div>
        <div className="projects">
          <div className="project project1">
            <div className="projectImage">
              <img src={img1} alt="" />
            </div>
            <div className="projectDetails">
                <a href="https://jihbuij.com"><p>Youtube Clone</p></a>
            </div>
            {/* <div className="projectDesc">
              This is a Youtube Clone app made using REACT JS.
            </div> */}
          </div>
          <div className="project project1">
          <div className="projectImage">
              <img src={img2} alt="" />
            </div>
            <div className="projectDetails">
            <a href="https://biswajit06082002.github.io/Quiz-app/"><p>Quiz App</p></a>
            </div>
            {/* <div className="projectDesc">
              This is a Youtube Clone app made using REACT JS.
            </div> */}
          </div>
          <div className="project project1">
          <div className="projectImage">
              <img src={img3} alt="" />
            </div>
            
            <div className="projectDetails">
            <a href="https://jihbuij.com"><p>Weather App</p></a>
            </div>
            {/* <div className="projectDesc">
              This is a Youtube Clone app made using REACT JS.
            </div> */}
          </div>
          
        </div>
      </div>
      <div className="footerHome">
            CopyRight 2023
        </div>
    </div>
  )
}

export default About
