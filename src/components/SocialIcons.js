import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const IconLink = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: #ff9800;
  }
`;

const SocialIcons = () => {
  return (
    <SocialLinks>
      <IconLink
        href="https://www.linkedin.com/in/jeffgrahamcodes"
        target="_blank"
      >
        <FaLinkedin />
      </IconLink>
      <IconLink
        href="https://github.com/jeffgrahamcodes"
        target="_blank"
      >
        <FaGithub />
      </IconLink>
      <IconLink href="mailto:jeffgrahamcodes@gmail.com">
        <FaEnvelope />
      </IconLink>
    </SocialLinks>
  );
};

export default SocialIcons;
