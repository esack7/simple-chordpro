import React from 'react';
import { Foot, FootText, LogoStyled, NonHyper } from '../style/Styles';
import GitHubMark32px from '../pics/GitHubMark32px.png';

const Footer = () => (
  <Foot>
    <FootText>
      Created and designed by{' '}
      <NonHyper href="https://github.com/esack7" target="_blank">
        Isaac Heist
      </NonHyper>
    </FootText>
    <FootText>
      <LogoStyled src={GitHubMark32px} alt="Github logo" />
    </FootText>
  </Foot>
);

export default Footer;
