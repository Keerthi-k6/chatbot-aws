import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section className="c-wrapper" id='contact'>
    <div className="c-container flexCenter paddings">
      <h1>Contact Us! </h1>
      <div className="c-desc paddings">
      You are welcome to contact us at any time. Whether you have an suggestion to make or if you have a problem you need to solve or just want to leave a comment, we would love to hear from you !</div>
      <div className="c-cta">
      <button className=' btn-cta'>
        <a href='mailto:bossburger.b6@gmail.com' target='_blank'>Mail us at <br/> bossburger.b6@gmail.com</a>
      </button>
      <button className='btn-cta'>
        <a href='tel:123456789' target='_blank'>Call Us! <br/> +123456789</a>
      </button>
      </div>
    </div>
   </section>
  )
}

export default Contact
