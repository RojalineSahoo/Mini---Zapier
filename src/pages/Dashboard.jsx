// src/pages/Dashboard.jsx - Enhanced Card Layout
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const mockWorkflows = [
    { id: 1, name: 'Gmail to Slack Alert', status: 'Active', runs: 45, lastRun: '5 minutes ago' },
    { id: 2, name: 'New Trello Card to Sheets', status: 'Inactive', runs: 12, lastRun: '3 days ago' },
    { id: 3, name: 'GitHub Star to Discord', status: 'Active', runs: 210, lastRun: '1 hour ago' },
];

function Dashboard() {
    return (
        <div className="dashboard-content">
            <div className="main-content-header">
                <h1>My Automation Workflows</h1>
                <p>You have **{mockWorkflows.length}** total workflows.</p>
            </div>
            
            {/* The new Header Row (for structure/labels) */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr', fontWeight: 'bold', padding: '10px 20px', borderBottom: '1px solid #ddd' }}>
                <div>Workflow Name</div>
                <div>Status</div>
                <div>Runs</div>
                <div>Last Run</div>
                <div>Action</div>
            </div>

            {/* The Workflow List Container */}
            <div className="workflow-list-container">
                {mockWorkflows.map(wf => (
                    <div className="workflow-card" key={wf.id}>
                        {/* 1. Workflow Name */}
                        <div>
                            <Link to={`/build/${wf.id}`} className="card-name-link">
                                {wf.name}
                            </Link>
                        </div>
                        
                        {/* 2. Status Badge */}
                        <div>
                            <span 
                                className={`workflow-status ${wf.status === 'Active' ? 'status-active' : 'status-inactive'}`}
                            >
                                {wf.status === 'Active' ? '✅ Active' : '⏸️ Inactive'}
                            </span>
                        </div>
                        
                        {/* 3. Runs Data */}
                        <div>
                            <span className="card-data-label">Total Runs</span>
                            {wf.runs}
                        </div>
                        
                        {/* 4. Last Run Data */}
                        <div>
                            <span className="card-data-label">Last Successful Run</span>
                            {wf.lastRun}
                        </div>
                        
                        {/* 5. Actions */}
                        <div className="card-action-group">
                            <button 
                                className="mock-button" 
                                style={{ backgroundColor: wf.status === 'Active' ? '#dc3545' : '#28a745' }}
                            >
                                {wf.status === 'Active' ? 'Pause' : 'Activate'}
                            </button>
                            <button className="mock-button" style={{ backgroundColor: '#6c757d' }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;