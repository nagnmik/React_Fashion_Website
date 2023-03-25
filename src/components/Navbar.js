import React, { useState } from 'react';
import {Menu_Items} from './Menu_Items';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <h1 className='nav-logo' onClick={closeMobileMenu}><span>F</span>ashion</h1>

        <div className='menu-icons' onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={click? 'nav-menu active' : 'nav-menu'}>
            {Menu_Items.map((item, index)=>{
                return(
                    <li key={index}>
                        <Link to={item.url} className={item.cName} href='/' onClick={closeMobileMenu}>
                            {item.title}
                        </Link>
                    </li>
                );
            })}
            <button>Đăng nhập</button>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
