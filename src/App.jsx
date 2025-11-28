// src/App.jsx - Zapier Layout
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import WorkflowBuilder from './pages/WorkflowBuilder';
import Credentials from './pages/Credentials';
import History from './pages/History';
import './styles.css'; 

// Component for the fixed sidebar navigation
const MainNavigation = () => {
    const location = useLocation();
    const links = [
        { path: '/', name: 'My Workflows' },
        { path: '/build', name: 'Create Workflow' },
        { path: '/credentials', name: 'App Connections' },
        { path: '/history', name: 'Activity History' },
    ];

    return (
        <div className="main-sidebar">
            <div className="sidebar-logo">⚡ MiniZap</div>
            <nav>
                {links.map((link) => (
                    <Link 
                        key={link.path}
                        to={link.path} 
                        // Add 'active' class if current path starts with link path
                        className={`nav-link ${location.pathname.startsWith(link.path) && link.path !== '/build' ? 'active' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
                {/* Special case for /build and /build/:id to show active 
                <Link 
                    to="/build" 
                    className={`nav-link ${location.pathname.startsWith('/build') ? 'active' : ''}`}
                    style={{ marginTop: '20px', backgroundColor: '#007bff', color: 'white' }}
                >
                    + Create New 
                </Link>
            </nav>
        </div>
    );
};

function App() {
  return (
    <Router>
      <div className="app-layout">
        <MainNavigation /> {/* Fixed Sidebar 
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/build" element={<WorkflowBuilder />} />
            <Route path="/build/:id" element={<WorkflowBuilder />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;*/

// src/App.jsx - Routing Updated for Home/Landing Page
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home'; // NEW IMPORT
import Dashboard from './pages/Dashboard';
import WorkflowBuilder from './pages/WorkflowBuilder';
import Credentials from './pages/Credentials';
import History from './pages/History';
import './styles.css'; 

// Component for the fixed sidebar navigation (now used only for logged-in routes)
const MainNavigation = () => {
    const location = useLocation();
    const links = [
        { path: '/dashboard', name: 'My Workflows' },
        { path: '/build', name: 'Create Workflow' },
        { path: '/credentials', name: 'App Connections' },
        { path: '/history', name: 'Activity History' },
    ];

    // Check if user is on a "logged-in" page (any route that is NOT the root home)
    const isLoggedInRoute = location.pathname !== '/';

    if (!isLoggedInRoute) {
        return null; // Don't show the sidebar on the main landing page
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
        <MainNavigation /> {/* Fixed Sidebar appears only on logged-in routes */}
        
        <div className="main-content" style={isHomePage ? { marginLeft: 0, padding: 0 } : {}}>
          <Routes>
            {/* The Home page is now the root route */}
            <Route path="/" element={<Home />} /> 
            
            {/* Logged-in Routes (now start with /dashboard) */}
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

// NOTE: We wrap App with Router in main.jsx (or use a standalone router component)
// Assuming we are wrapping the App component with <Router> in main.jsx
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
