import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease-in-out;
  width: 300px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 15px;
`;

const Description = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const Links = styled.div`
  margin-top: 15px;

  a {
    text-decoration: none;
    color: #ff9800;
    font-weight: bold;
    margin: 0 10px;
  }
`;

const ProjectCard = ({ title, description, image, demo, github }) => {
  return (
    <Card whileHover={{ scale: 1.05 }}>
      <ProjectImage src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Links>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>{' '}
        |
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </Links>
    </Card>
  );
};

export default ProjectCard;
