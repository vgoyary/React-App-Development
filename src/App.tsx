// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// App.tsx
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