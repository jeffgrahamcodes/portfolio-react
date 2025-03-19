import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
  max-width: 800px;
  margin: auto;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #ff9800;
  font-weight: bold;
`;

const BoldText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const About = () => {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </Title>

      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Hi, I'm <Highlight>Jeff Graham</Highlight>, a{' '}
        <Highlight>Full-Stack Developer & Cloud Architect</Highlight>{' '}
        with a strong passion for building scalable, secure, and
        high-performing applications. My expertise spans across
        <BoldText>
          {' '}
          DevOps, Cloud Computing, and CI/CD automation
        </BoldText>
        .
      </Paragraph>

      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        My journey into tech has been an exciting one. I started in{' '}
        <Highlight>STEM education</Highlight>, where I honed my
        problem-solving skills and passion for learning. This
        naturally led me to software development, where I now
        specialize in
        <BoldText>
          {' '}
          Vue.js, React, Node.js, Python, and FastAPI
        </BoldText>
        .
      </Paragraph>

      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Currently, I work as a{' '}
        <Highlight>Partner Solutions Architect at AWS</Highlight>,
        where I design and implement
        <BoldText> scalable cloud infrastructure</BoldText> for
        businesses. I thrive in environments where I can
        <BoldText>
          {' '}
          optimize systems, automate workflows, and create efficient
          cloud solutions
        </BoldText>
        .
      </Paragraph>

      <Paragraph
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        When I'm not coding, I love exploring{' '}
        <BoldText>
          new technologies, mentoring developers, and contributing to
          open-source projects
        </BoldText>
        . I’m always open to{' '}
        <BoldText>
          collaborations, tech discussions, and new opportunities
        </BoldText>{' '}
        to create impactful software.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
