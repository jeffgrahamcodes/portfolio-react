import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'DevOps Dashboard',
    description: 'Automated CI/CD dashboard.',
    demo: '#',
    github: '#',
  },
  {
    title: 'AI Chatbot',
    description: 'FastAPI + Flask chatbot.',
    demo: '#',
    github: '#',
  },
];

const ProjectsContainer = styled.div`
  padding: 50px;
  background: #1e1e1e;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.demo}>Live Demo</a> |{' '}
          <a href={project.github}>GitHub</a>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
