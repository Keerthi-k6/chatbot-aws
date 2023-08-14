import React from 'react'
import './locations.css'
import hyd from '../../assets/hyd.jpeg'
import vja from '../../assets/vja.jpeg'
import mangal from '../../assets/mangal.jpeg'
const data = [
    {
        id: 1,
        image: vja,
        title: 'Vijayawada',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, atque 234-45678-3456Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, cupiditate',
    },
    {
    id: 2,
    image: hyd,
    title: 'Hyderabad',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, atque 234-45678-3456Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, cupiditate',
    
    },
    {
        id: 3,
        image: mangal,
        title: 'Mangalgiri',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, atque 234-45678-3456Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, cupiditate',
    },
]
const Locations = () => {
  return (
 <section className="location-wrapper" id='locations'>
    <div className="location-title innerwidth paddings flexCenter">
    <h1>Locations</h1>
    </div>
    <div className="location-container innerwidth paddings">
    {
                    data.map(({id,image,title,desc})=>{
                        return(
                            <div className="location-card flexCenter">
    <div className='location-image' key={id}>
    <img src={image} alt="location" width={200}/>
    </div>
    <div className='location-desc flexCenter' style={{rowGap:0}}>
     <h1><b>{title}</b> </h1>
      <div className="location-p">
          {desc}
        </div>
    </div>
    </div>
                         
                        )
                    })
                }
    </div>
 </section>
  )
}

export default Locations
