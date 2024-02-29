"use client";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Navbar = () => {
  const UILink = styled(Link)`
    margin-right: 30px;
  `;

  const Nav = styled.nav`
    display: flex;
    background-color: #191e43;
    color: white;
    padding: 10px;
    justify-content: space-between;
    align-content: flex-end;
  `;

  const NavRight = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <Nav>
      <div>
        <Image
          src="/logo.jpg"
          alt="Next.js Logo"
          width={200}
          height={170}
          priority
        />
      </div>

      <NavRight>
        <UILink href="/">Home</UILink>
        <UILink href="/about">Chi Siamo</UILink>
        <UILink href="/where">Dove</UILink>
        <UILink href="/contacts">Contatti</UILink>
      </NavRight>
    </Nav>
  );
};

export default Navbar;
