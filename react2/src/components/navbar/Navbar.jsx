import React from 'react';
import './Navbar.css';
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import { logRoles } from '@testing-library/react';
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return(
        <div className='gpt3Navbar'>
            <div className='gpt3NavbarLink'>
                <div className='gpt3NavbarLinkLogo'>
                    <img src={logo} alt='logo'></img>

                </div>
            </div>
        </div>
    )
}

export default Navbar