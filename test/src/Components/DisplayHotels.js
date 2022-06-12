import React from 'react';
import Bushmills from './Hotels/Bushmills'
import './DisplayHotels.css'
import Tintswalo from './Hotels/Tintswalo.js';
import Mount from './Hotels/Mount.js';
import Merchant from './Hotels/Merchant.js';

function DisplayHotels(){
    
    return(
    <div className='hotel-container'>
      <div className='inner'>
        <h2>HOTELS</h2>
       <Bushmills/>
       <Merchant/>
       <Mount/>
       <Tintswalo/>
      </div>
         
    </div>
    );
}

export default DisplayHotels;