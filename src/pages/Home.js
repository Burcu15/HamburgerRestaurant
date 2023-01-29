import React from 'react'
import{Link} from 'react-router-dom';
import Burger3 from '../assets/burger3.jpg';

export default function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${Burger3})`}}>
        <div className='headerContainer'>
            <h1>Burger 35</h1>
            <p>Delicious Hamburgers <br/>
            With 35 Spicy Mixed</p>
            <Link to="/menu">
                <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

