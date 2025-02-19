import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';
import Layout from './components/Layout'; // Create a Layout component for shared elements

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;