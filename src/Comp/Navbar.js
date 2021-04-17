import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { VscThreeBars } from 'react-icons/vsc'; 
import { DiJavascript1 } from 'react-icons/di';
import { IoWomanSharp } from 'react-icons/io5';




function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 
   

  return (
    <>
      
        <nav className='NB'>
          <div className='NB_cont cont'>
            <Link to='/' className='NB_logo' onClick={closeMobileMenu}>
              <IoWomanSharp className='NB_icon' style={{
              
            }} />
            JavaScript for Aunties
            </Link>
            <div className='BN_icon' onClick={handleClick} style={{
              color: '#ffffff'
            }}>
              {click ? <DiJavascript1 /> : <VscThreeBars />}
            </div>
            <ul className={click ? 'NB_menu active' : 'NB_menu'}>
              <li className='NB_item'>
                <Link to='/' className='NB_links' onClick={closeMobileMenu}>
                  Introduction
                </Link>
              </li>
              <li className='NB_item'>
                <Link
                  to='/BasicConcepts'
                  className='NB_links'
                  onClick={closeMobileMenu}
                >
                  Basic Concepts
                </Link>
              </li>
              <li className='NB_item'>
                <Link
                  to='/Functions'
                  className='NB_links'
                  onClick={closeMobileMenu}
                >
                  Functions
                </Link>
              </li>
              <li className='NB_item'>
              <Link
                  to='/object'
                  className='NB_links'
                  onClick={closeMobileMenu}
                >
                  Objects
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      
    </>
  );
}

export default Navbar;
