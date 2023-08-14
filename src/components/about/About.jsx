import React from 'react'
import './About.css'
import about from '../../assets/about.png'
const About = () => {
  return (
    <section className="about-wrapper" id='about'>
    <div className="about-title innerwidth paddings flexCenter">
    <h1>About Us</h1>
    </div>
    <div className="about-container innerwidth paddings">
    {/* leftside */}
    <div className='about-image'>
    <img src={about} alt="about"/>
    </div>
    {/* rightside */}
    <div className='about-desc paddings'>
     <h1><b> Welcome! </b> </h1>
     <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, impedit!</h1>
      <div className="about-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laborum dolorum reprehenderit? Quis eveniet quas commodi sequi ipsam nesciunt temporibus! Distinctio nobis, amet temporibus maxime enim consectetur fugit possimus saepe voluptate nisi vel provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, aliquid. Quidem minus officia deleniti adipisci, aspernatur eius dolore hic culpa!
        </div>
    </div>
    </div>
</section>
  )
}
export default About
