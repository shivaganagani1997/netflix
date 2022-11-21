import React, { useState, useEffect } from 'react'
import './Header.css'


function Header() {

    const [show, handleShow] = useState(false);

    /* useEffect(() => {
       window.addEventListener("scroll",  () => {
           if (window.scrollY > 100) {
             handleShow(true);
           } else {
             handleShow(false);
           };
         });
        return () => {
          window.removeEventListener("scroll");
        };
      }, []);*/
  return (
    <div className={`header ${show && "header__black"}`}>
        <img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png' alt='Netflix Logo'/>

        <img className='header__userIcon' src='https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229' alt='Netflix Logo'
        />


    </div>
  )
}

export default Header