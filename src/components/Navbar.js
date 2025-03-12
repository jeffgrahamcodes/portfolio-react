// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.navBackground};
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>My Portfolio</h1>
      <div>
        <Link to="/">Home</Link> |<Link to="/about"> About</Link> |
        <Link to="/projects"> Projects</Link> |
        <Link to="/contact"> Contact</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
