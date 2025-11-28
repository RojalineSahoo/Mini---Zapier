import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/build" className="sidebar-link-new">+ New Workflow</Link>
      
      <div className="sidebar-section">
        **Workflows**
        <div className="sidebar-workflow-count">Total Workflows (2)</div>
      </div>

      <div className="sidebar-section">
        <Link to="/history" className="nav-link" style={{ marginLeft: 0 }}>Activity Logs</Link>
      </div>

      <div className="sidebar-section">
        <Link to="/credentials" className="nav-link" style={{ marginLeft: 0 }}>App Settings</Link>
      </div>
    </div>
  );
}

export default Sidebar;