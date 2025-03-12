import React from 'react';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import DarkModeToggle from '../components/DarkModeToggle';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GlobalStyles } from '../styles/GlobalStyles';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;
  margin-top: 30vh;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  opacity: 0.8;
`;

const CTA = styled(motion.a)`
  background: #ff9800;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <DarkModeToggle />
      <HeroContainer>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm Jeff Graham
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Full-Stack & DevOps Engineer | Cloud Architect | CI/CD
          Enthusiast
        </Subtitle>
        <CTA
          href="#projects"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          Check Out My Work
        </CTA>
      </HeroContainer>

      <TechStack />
      <Projects />
    </>
  );
};

export default Home;
