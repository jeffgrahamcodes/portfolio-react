// components/DarkModeToggle.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.toggleBackground};
  color: ${({ theme }) => theme.toggleText};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
`;

const DarkModeToggle = ({ toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      Toggle Dark Mode
    </ToggleButton>
  );
};

export default DarkModeToggle;
