import React from 'react'
import './Banner.css'
import { motion } from 'framer-motion';
import banner from '../../assets/banner.png'
import {FaWhatsapp} from 'react-icons/fa'
const Banner = () => {
  return (
    <>
    <section className="banner-wrapper" id='banner'>
    <div className="innerwidth paddings flexCenter banner-container" style={{justifyContent: 'space-evenly',alignItems: 'flex-end'}}>
       {/* leftside */}
        <div className="flexStart banner-left">
            <div className="banner-title ">
                <motion.h1
                 initial={{y:"2rem",opacity:'0'}}
                 animate={{y:"0",opacity:'1'}}
                 transition={{duration:2,type:'spring'}}
                >Customize your</motion.h1>
                <motion.h1
                 initial={{y:"2rem",opacity:'0'}}
                 animate={{y:"0",opacity:'1'}}
                 transition={{duration:2,type:'spring'}}
                >favourite <b style={{color:'#f9b209'}}>Boss Burger</b></motion.h1>
                <motion.h1
                 initial={{y:"2rem",opacity:'0'}}
                 animate={{y:"0",opacity:'1'}}
                 transition={{duration:2,type:'spring'}}
                > with us!</motion.h1>
                <motion.div 
                className="btn-container flexStart" style={{marginTop:'2rem'}}>
                    <button className="button">
                    <a href='https://wa.me/+14155238886' target='_blank'><div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>Chat with us!<FaWhatsapp style={{fontSize:'1rem'}}/></div></a>
                    </button>
                    </motion.div>
            </div>
        </div>
        {/* rightside */}
        <div className="flexCenter banner-right">
            <motion.div
                initial={{x:"7rem",opacity:'0'}}
                animate={{x:"0",opacity:'1'}}
                transition={{duration:2,type:'spring'}} className="image-container">
                <img src={banner} alt="banner"/>
            </motion.div>
        </div>
    </div>
<div className="white-gradient" style={{top:'25%',right:'16%',opacity:'0.9', width:'15rem',height:'15rem',filter:'blur(15rem)'}}/>
</section>
</>
  )
}

export default Banner
