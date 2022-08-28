import React from "react";
import '../App.css'
function Header({rates}) {
    
    
    return(
        <header >
          <div className='actually_currency'>
            <p>USD: {rates.USD}</p>
            <p>EUR: {rates.EUR}</p>
            <p>UAH: {rates.UAH}</p>
          </div>
        </header>
    )
}

export default Header