import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
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
                <Bars />

                <NavMenu>

                    <NavLink
                        to="/about"
                        activestyle={{ color: 'black' }}
                    >
                        Infos
                    </NavLink>
                    <NavLink
                        to="/tarifs"
                        activestyle={{ color: 'black' }}
                    >
                        Tarifs
                    </NavLink>
                    <NavLink
                        to="/contact"
                        activestyle={{ color: 'black' }}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/signin"
                        activestyle={{ color: 'black' }}
                    >
                        Se connecter
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/sign-up">S'inscrire</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;