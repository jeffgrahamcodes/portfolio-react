import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  padding: 50px;
  text-align: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1000px;
  margin: auto;
`;

const projects = [
  {
    title: 'DevOps Dashboard',
    description:
      'Automated CI/CD dashboard for monitoring deployments.',
    image: 'https://via.placeholder.com/300', // Replace with your project image
    demo: '#',
    github: '#',
  },
  {
    title: 'AI Chatbot',
    description: 'FastAPI + Flask chatbot for customer support.',
    image: 'https://via.placeholder.com/300',
    demo: '#',
    github: '#',
  },
  {
    title: 'Cloud Image Processor',
    description: 'Serverless image processing API using AWS Lambda.',
    image: 'https://via.placeholder.com/300',
    demo: '#',
    github: '#',
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>My Projects</Title>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
