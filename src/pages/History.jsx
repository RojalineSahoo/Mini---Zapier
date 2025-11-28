import React from 'react';
import '../styles.css';

function History() {
    return (
        <div>
            <h1>Activity Logs and Run History 📜</h1>
            <p>This page would show a detailed log of every time a workflow ran, its status (Success/Failure), and the execution time.</p>
            <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', backgroundColor: '#fff', borderRadius: '4px' }}>
                <p>Mock Log Entry: Workflow #1 ran successfully at 2025-11-28 10:05 AM</p>
                <p style={{ color: 'red' }}>Mock Log Entry: Workflow #2 failed at 2025-11-28 09:10 AM (Error: Slack Channel Not Found)</p>
            </div>
        </div>
    );
}

export default History;