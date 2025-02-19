import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';
import Layout from './components/Layout'; 
import Dashboard from './components/Dashboard';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
   
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home count={count} increment={increment} decrement={decrement} />} />
          <Route path="/counter" element={<Counter count={count} increment={increment} decrement={decrement} reset={reset} />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;