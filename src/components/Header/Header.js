import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  font-size: 18px;
  color: #000000;
  text-decoration: none;
  padding: 0 30px;
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LogoImg = require('../../assets/images/logo.png');

function Header() {
  return (
    <div className='header'>
      <img src={LogoImg} alt='logo' />
      <Navbar>
        <Link href='/'>About</Link>
        <Link href='/'>How it works</Link>
        <Link href='/'>Projects</Link>
        <Link href='/'>Contacts</Link>
      </Navbar>
      <Button>Let's talk</Button>
    </div>
  );
}

export default Header;
