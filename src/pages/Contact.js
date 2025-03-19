import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SocialIcons from '../components/SocialIcons';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 30px;
`;

const EmailButton = styled(motion.a)`
  background: #ff9800;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  display: inline-block;
  box-shadow: 0px 4px 10px rgba(255, 152, 0, 0.5);
  transition: background 0.3s ease;

  &:hover {
    background: #e08900;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Feel free to reach out via email or connect with me on
        LinkedIn & GitHub!
      </Subtitle>

      <EmailButton
        href="mailto:jeffgrahamcodes@gmail.com"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        Send Me an Email
      </EmailButton>

      <SocialIcons />
    </ContactContainer>
  );
};

export default Contact;
