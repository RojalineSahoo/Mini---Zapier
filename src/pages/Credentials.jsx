import React from 'react';
import '../styles.css';

const mockApps = [
    { name: 'Gmail', status: 'Connected', date: '2025-10-01' },
    { name: 'Slack', status: 'Connected', date: '2025-10-01' },
    { name: 'Trello', status: 'Not Connected', date: null },
    { name: 'GitHub', status: 'Connected', date: '2025-11-15' },
    { name: 'Airtable', status: 'Not Connected', date: null },
];

function Credentials() {
    return (
        <div>
            <h1>App Connections</h1>
            <p>Manage the third-party accounts MiniZap uses to run your workflows.</p>
            <div className="app-container">
                {mockApps.map(app => (
                    <div key={app.name} className="app-card">
                        <h3>{app.name}</h3>
                        <p>Status: <span className={app.status === 'Connected' ? 'status-connected' : 'status-disconnected'}>
                            {app.status}
                        </span></p>
                        <p style={{ fontSize: '12px', color: '#666' }}>
                            {app.date ? `Connected since: ${app.date}` : 'Awaiting Connection'}
                        </p>
                        <button className="mock-button" style={{ backgroundColor: app.status === 'Connected' ? '#dc3545' : '#28a745' }}>
                            {app.status === 'Connected' ? 'Disconnect' : 'Connect Account'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Credentials;