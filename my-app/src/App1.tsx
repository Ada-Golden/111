import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConstructionProvider } from './context/ConstructionContext';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Contractors from './pages/Contractors';
import Reports from './pages/Reports';
import Sidebar from './components/common/Sidebar';//导入上级目录的 components/Dashboard 文件
import Navbar from './components/common/Navbar';

function App() {
  return (
    <ConstructionProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contractors" element={<Contractors />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ConstructionProvider>
  );
}

export default App;