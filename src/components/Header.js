import React from 'react';

import { Navbar, Container } from 'react-bootstrap';

import { ReactComponent as Logo } from '../images/logo.svg';
const navbarstyle = {
  backgroundColor: '#eeeeee',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarstyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '14rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};
export default Header;
