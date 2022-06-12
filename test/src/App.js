import './App.css';
import React from 'react';
import  {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Error from './Pages/Error';
import DisplayHotels from './Components/DisplayHotels';
import BushmillPage from './Pages/Products';
import MountPage from './Pages/MountPage';
import TintswaloPage from './Pages/TintswaloPage';
import MerchantPage from './Pages/MerchantPage';

function App() {
  
  return (
    <Router>
      <nav className='nav-bar'>
      </nav>
      <div className="App">
        <div className='Background'>
         
          <div className='outer'>
            
            <Routes>
              <Route path={`/`} element={ <DisplayHotels/>}/>
              <Route path='/Product-Descrption' element={<BushmillPage/>}/>
              <Route path='/Product-D' element={<MerchantPage/>}/>
              <Route path='/Product-Des' element={<MountPage/>}/>
              <Route path='/Product-Descri' element={<TintswaloPage/>}/>
              {/* <Route path='/Product-Description/Product-ID' element={<ProductDescription/>}/> */}
              <Route path='*' element={<Error/>}/>
            </Routes>
           
          </div>
          
        </div>
      </div>
    </Router>    
  );
}

export default App;