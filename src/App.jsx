import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard';
import WorkflowBuilder from './pages/WorkflowBuilder';
import Credentials from './pages/Credentials';
import History from './pages/History';
import './styles.css'; 

const MainNavigation = () => {
    const location = useLocation();
    const links = [
        { path: '/dashboard', name: 'My Workflows' },
        { path: '/build', name: 'Create Workflow' },
        { path: '/credentials', name: 'App Connections' },
        { path: '/history', name: 'Activity History' },
    ];

    const isLoggedInRoute = location.pathname !== '/';

    if (!isLoggedInRoute) {
        return null; 
    }

    return (
        <div className="main-sidebar">
            <div className="sidebar-logo">⚡ MiniZap</div>
            <nav>
                {links.map((link) => (
                    <Link 
                        key={link.path}
                        to={link.path} 
                        className={`nav-link ${location.pathname.startsWith(link.path) && link.path !== '/build' ? 'active' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link 
                    to="/build" 
                    className={`nav-link ${location.pathname.startsWith('/build') ? 'active' : ''}`}
                    style={{ marginTop: '20px', backgroundColor: '#ff4a00', color: 'white' }}
                >
                    🚀 Build New Workflow
                </Link>
            </nav>
        </div>
    );
};

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`app-layout ${isHomePage ? 'homepage-layout' : ''}`}>
        <MainNavigation /> 
        
        <div className="main-content" style={isHomePage ? { marginLeft: 0, padding: 0 } : {}}>
          <Routes>
            <Route path="/" element={<Home />} /> 
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/build" element={<WorkflowBuilder />} />
            <Route path="/build/:id" element={<WorkflowBuilder />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
    </div>
  );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
