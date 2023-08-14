import React from 'react'
import './Menu.css'
import vegburger from '../../assets/vegburger.jpeg'
import chickenburger from '../../assets/chickenburger.jpeg'
import cheeseburger from '../../assets/cheeseburger.jpeg'
import fries from '../../assets/fries.jpeg'
import perifries from '../../assets/perifries.jpeg'
import coke from '../../assets/coke.jpeg'
import pepsi from '../../assets/pepsi.jpeg'
import addons from '../../assets/addons.jpeg'
const data = [
  {
  id: 1,
  image: vegburger,
  title: 'Veg Burger',
  price: '50/-',
  },
  {
      id: 2,
      image: chickenburger,
      title: 'Chicken Burger',
      price: '90/-',
  },
  {
      id: 3,
      image: cheeseburger,
      title: 'Cheese Burger',
      price: '70/-',
  },
  {
      id: 4,
      image: fries,
      title: 'Salted Fries',
      price: '30/-',
  },
  {
      id: 5,
      image: perifries,
      title: 'Peri Peri Fries',
      price: '50/-',
  },
  {
      id: 6,
      image: pepsi,
      title: 'Pepsi',
      price: '40/-',
  },
  {
      id: 7,
      image: coke,
      title: 'Coke',
      price: '40/-',
  },
  {
      id: 8,
      image: addons,
      title: 'Add-ons',
      price: '30/-',
  },

]
const Menu = () => {
  return (
    <section className="menu-wrapper" id='menu'>
    <div className="menu-title innerwidth paddings flexCenter">
    <h1>Menu</h1>
    </div>
      <div className="menu-container innerwidth paddings flexCenter">
      {
                    data.map(({id,image,title,price})=>{
                        return(
                            <article className="menu-item" key={id}> 
                                <div className="menu-image" >
                                    <img src={image} alt={title} width={200}/>
                                </div>
                                <div className="menu-text flexColCenter">
                                <h4>{title}</h4>
                                <p>{price}</p>
                                </div>
                            </article>
                        )
                    })
                }

      </div>
    </section>
  )
}

export default Menu
