import React from 'react'
import '../Components/DisplayHotels.css';
import FetchMount from '../Components/FetchMount';

function MountPage() {
  return (
    <div>
      <h2>CATEGORIES</h2>
      <FetchMount />
    </div>
    
  )
}

export default MountPage;