import React from 'react'
import '../Components/DisplayHotels.css';
import FetchBushmill from '../Components/FetchBushmill';
import BushmillPage from './Products';

function BushmillPage() {
  return (
    <div>
      <h2>CATEGORIES</h2>
      <FetchBushmill/>
    </div>

    
  )
}

export default BushmillPage;