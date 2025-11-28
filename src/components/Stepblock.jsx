// src/components/StepBlock.jsx
import React from 'react';
import '../styles.css';

function StepBlock({ step, index, onClick, isSelected }) {
    const isTrigger = step.type === 'Trigger';
    
    // Add a selected class based on the prop
    const selectedClass = isSelected ? ' selected-step' : '';
    const headerClass = isTrigger ? 'trigger-header' : 'action-header';

    return (
        <div 
            className={`step-block${selectedClass}`} 
            onClick={onClick} 
        >
            <div className={`step-block-header ${headerClass}`}>
                <span>{isTrigger ? `Trigger: ${step.app}` : `Step ${index + 1}: ${step.app}`}</span>
                <span style={{ fontSize: '18px' }}>{isTrigger ? '⚡' : '⚙️'}</span>
            </div>
            <div className="step-block-body">
                <p><strong>Event:</strong> {step.event}</p>
                <p style={{ color: step.status === 'Needs Mapping' ? 'orange' : 'green' }}>
                    **Status:** {step.status}
                </p>
                <button className="mock-button">Configure / Map Data</button>
            </div>
        </div>
    );
}

export default StepBlock;