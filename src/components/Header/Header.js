import React from 'react';
import * as Scroll from 'react-scroll';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollLink = Scroll.Link;
const LinkItem = styled(ScrollLink)`
  font-size: 18px;
  color: #000000;
  text-decoration: none;
  padding: 0 30px;
  cursor: pointer;
`;

const Button = styled.div`
  font-size: 18px;
  color: #242424;
  background: #e0e0e0;
  padding: 18px 55px 15px;
  margin-left: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LogoImg = require('../../assets/images/logo.png');

function Header(props) {
  return (
    <div className='header'>
      <img src={LogoImg} alt='logo' />
      <Navbar>
        <LinkItem 
          to="about" 
          spy={true} 
          smooth={true} 
          duration={500}
        >About</LinkItem>
        <LinkItem 
          to="howItWorks" 
          spy={true} 
          smooth={true} 
          duration={500} 
         >How it works</LinkItem>
        <LinkItem 
          to="projects" 
          spy={true} 
          smooth={true} 
          duration={500} 
         >Projects</LinkItem>
        <LinkItem 
          to="contacts" 
          spy={true} 
          smooth={true} 
          duration={500} 
         >Contacts</LinkItem>
      </Navbar>
      <Button onClick={props.click}>Let's talk</Button>
    </div>
  );
}

export default Header;
