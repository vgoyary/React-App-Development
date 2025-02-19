import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", p: 5 }}>
      <Typography variant="h4">Welcome to My React App</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is a simple app with a Counter, User Form, and Rich Text Editor.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" sx={{ mx: 2 }}>
          <Link to="/form" style={{ color: "white", textDecoration: "none" }}>User Form</Link>
        </Button>
        <Button variant="contained" sx={{ mx: 2 }}>
          <Link to="/editor" style={{ color: "white", textDecoration: "none" }}>Rich Text Editor</Link>
        </Button>
        <Button variant="contained" sx={{ mx: 2 }}>
          <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
