import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My React App
          </Typography>
          <Button color="inherit">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Counter</Link>
          </Button>
          <Button color="inherit">
            <Link to="/form" style={{ color: 'inherit', textDecoration: 'none' }}>Form</Link>
          </Button>
          <Button color="inherit">
            <Link to="/editor" style={{ color: 'inherit', textDecoration: 'none' }}>Editor</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 3 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;