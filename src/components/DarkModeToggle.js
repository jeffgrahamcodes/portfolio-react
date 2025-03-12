import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 20px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`;

const DarkModeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme}>
      Toggle Dark Mode
    </ToggleButton>
  );
};

export default DarkModeToggle;
