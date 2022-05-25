import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    // Bars,
    NavMenu

} from "./NavbarElements";
import './nav.css'
import douce from "./douce.svg"
const Navbar = () => {


    return (
        <>
            <Nav id="navMain">
                <NavLogo to="/">
                    <img className='logo-douce' src={douce} alt="logo douce" />
                </NavLogo>
                {/* <Bars/> */}

                <NavMenu>

                    <NavLink
                        to="/about"
                        activestyle={{ color: 'black' }}

                    >
                        INFOS
                    </NavLink>
                    <NavLink
                        to="/tarifs"
                        activestyle={{ color: 'black' }}

                    >
                        TARIFS
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activestyle={{ color: 'black' }}

                    >
                        CONTACT
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;