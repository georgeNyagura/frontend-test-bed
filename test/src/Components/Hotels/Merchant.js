import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hotels.css';

function HotelTwo({name}){
    let navigate = useNavigate()
    const PRODUCTS = [
        'Bushmills Inn',
        'Merchants Hotel',
        'Mount Juliet Estate',
        'Tintswalo Atlantic'
      ]
    
    return(
        <div className='container'>
            <div className='left'>
            </div>
            <div className='right'>
                <button className='nav-buttons' key={name} onClick={() => navigate('/Product-D')}>{PRODUCTS[1]}</button>
            </div>
        </div>
    );
}

export default HotelTwo;