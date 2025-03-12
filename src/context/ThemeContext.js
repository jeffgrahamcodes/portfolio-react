import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Define Light & Dark Themes
const lightTheme = {
  background: '#ffffff',
  text: '#121212',
  cardBackground: '#f8f8f8',
};

const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  cardBackground: '#1e1e1e',
};

// Create Context
export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default to dark mode

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider
        theme={theme === 'dark' ? darkTheme : lightTheme}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
