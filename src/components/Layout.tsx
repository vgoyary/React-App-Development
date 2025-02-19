// Layout.tsx (in components folder)
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
          <Button color="inherit" component={Link} to="/">Counter</Button>
          <Button color="inherit" component={Link} to="/form">Form</Button>
          <Button color="inherit" component={Link} to="/editor">Editor</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 3 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;