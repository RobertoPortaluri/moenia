"use client"
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
const UILink = styled(Link)`

margin-right: 30px;`

  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px' }}>
      <UILink href="/">
       Home
      </UILink>
      <div style={{ marginLeft: 'auto' }}>
        <UILink href="/about">
         Chi Siamo
        </UILink>
        <UILink href="/where">
         Dove
        </UILink>
        <UILink href="/contacts">
          Contatti
        </UILink>
      </div>
    </nav>
  );
};

export default Navbar;
