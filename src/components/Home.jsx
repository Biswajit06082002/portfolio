import React from 'react'
import './styles/home.css';
import img from'../images/HeroImage.png';
import { HiAcademicCap } from "react-icons/hi";
import { FaProjectDiagram, FaHackerrank } from "react-icons/fa";
const Home = () => {
  return (
    <div className='body'>
        <div className="Interval">

        </div>
        <div className="heroSection">
          
            <div className="textSection">
            <div className="heroText1">
                Hey There,
                <p>This is </p> 
                <h1 className='' data-glitch="">Biswajit Roy</h1>
                <p>
                    A Developer, Student, Programmer
                </p>
                <a href="https://docs.google.com/document/d/1KtjcR89QmnEJvI44ZNhz-eYyvDu4tKcO/edit?usp=sharing&ouid=102738387752897596268&rtpof=true&sd=true"><button className="cv">
                    CV
                </button></a>
            </div>
            
            </div>
            <div className="imageSection">
                <div className="image">
                    <div className="innerImage">
                        <img src={img} alt="" />
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div className="Interval">

        </div>
        <div className="description">
            <div className="descHead">
                ACHIEVEMENTS
            </div>
            <div className="achievements">
                <div className="card1 cards">
                    <div className='cardText1'>Projects</div>
                    <div className="icon">
                    <FaProjectDiagram style={{color: 'orange', fontSize: '80px', padding: '0px 90px'}}/>
                </div>
                    <div className="cardText2">
                        15+
                    </div>
                    <div className="cardText3">
                        Projects done !!
                    </div>
                </div>
                <div className="card2 cards">
                <div className='cardText1'>Academics</div>
                <div className="icon">
                    <HiAcademicCap style={{color: 'orange', fontSize: '80px', padding: '0px 90px'}}/>
                </div>
                    <div className="cardText2">
                        8.86
                    </div>
                    <div className="cardText3">
                        SGPA average
                    </div>
                </div>
                <div className="card3 cards">
                <div className='cardText1'>HackerRank</div>
                <div className="icon">
                    <FaHackerrank style={{color: 'orange', fontSize: '80px', padding: '0px 90px'}}/>
                </div>
                    <div className="cardText2">
                        5
                    </div>
                    <div className="cardText3">
                        Stars In problem solving
                    </div>
                </div>

            </div>
            
            <div className="Interval">

        </div>
        <div className="homeContact">
        <div className="descHead">
                About Me
        </div>
        <div className="aboutSection">
            <b className='firstLetter'>L</b>orem ipsum dolor sit amet consectetur adipisicing elit. Quidem eligendi inventore accusamus ipsum autem tempore ad doloremque nesciunt officiis asperiores, totam officia incidunt eaque mollitia, facere velit repudiandae optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sed, rerum, eum beatae accusamus ipsa fugit asperiores praesentium nostrum molestias iste dignissimos! Quos hic ducimus voluptate, corporis atque labore odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, non impedit a exercitationem aut architecto minima qui ratione fuga mollitia magni ducimus nam eveniet ex deleniti itaque! Excepturi, aliquid hic?
            
        </div>
        <div className="footerHome">
            CopyRight 2023
        </div> 
        </div>
        </div>
        

    </div>
  )
}

export default Home
