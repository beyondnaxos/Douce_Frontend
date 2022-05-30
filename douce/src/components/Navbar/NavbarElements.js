import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    // background: #2c2b2c;
    height: 85px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    @media screen and (max-width: 1500px) {
      flex-direction: column;
  
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  margin-right: 4rem;
  @media screen and (max-width: 1500px) {
    margin-right: 1px;
   display: flex;
    justify-content: center;
    margin-right: 18px;
    align-items: center;
    width: 100%;
    height: 80px;
  }
`;

export const NavLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
font-family: 'Sora', sans-serif;
padding: 0.5rem 1rem;
font-size: 1.5rem;
margin-right: 1rem;
font-weight: 400;
height: 100%;
cursor : pointer;<

color: white;
// border : 1px solid white;

transition: all 0.25s ease-in-out;
&:hover {
  color: white;
}
@media screen and (max-width: 1500px) {
font-size: 1.2rem;
mrgin-right: 0;
padding: 0;
width: 33%;
display: flex;
justify-content: center;
height: 40px;
text-align: center;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 1500px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  
  @media screen and (max-width: 1500px) {
    justify-content: space-between;
   width: 350px;
  //  margin-top : 1rem;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 1500px) {
    // display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  font-size: 1.3rem;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #fff;
  }
`;