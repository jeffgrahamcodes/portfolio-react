import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaJs,
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFlask,
  FaAws,
  FaDocker,
} from 'react-icons/fa';

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px;
  background: #121212;
`;

const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const TechIcon = styled.div`
  font-size: 3rem;
  color: #ff9800;
`;

const TechName = styled.p`
  margin-top: 10px;
  color: white;
`;

const techStack = [
  { name: 'AWS', icon: <FaAws /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Vue', icon: <FaVuejs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Flask', icon: <FaFlask /> },
  { name: 'Docker', icon: <FaDocker /> },
];

const TechStack = () => {
  return (
    <TechContainer>
      {techStack.map((tech, index) => (
        <TechCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <TechIcon>{tech.icon}</TechIcon>
          <TechName>{tech.name}</TechName>
        </TechCard>
      ))}
    </TechContainer>
  );
};

export default TechStack;
