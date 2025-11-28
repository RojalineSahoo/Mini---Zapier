import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StepBlock from '../components/Stepblock'; 
import '../styles.css';

function WorkflowBuilder() {
    const { id } = useParams(); 
    const isEditing = !!id;
    const [workflowName, setWorkflowName] = useState(isEditing ? `Workflow #${id}` : 'New Unnamed Workflow');

    const [steps, setSteps] = useState([
        { type: 'Trigger', app: 'Gmail', event: 'New Email', status: 'Configured' },
        { type: 'Action', app: 'Slack', event: 'Send Channel Message', status: 'Needs Mapping' },
        { type: 'Action', app: 'Trello', event: 'Create Card', status: 'Configured' },
    ]);
    
    const [selectedStepIndex, setSelectedStepIndex] = useState(null); 

    const handleAddStep = () => {
        setSteps([...steps, { type: 'Action', app: 'Choose App', event: 'Select Action', status: 'Empty' }]);
        setSelectedStepIndex(steps.length);
    };
    
    const handleStepClick = (index) => {
        setSelectedStepIndex(index === selectedStepIndex ? null : index);
    };

    return (
        <div className="builder-area">
            <h1>{isEditing ? `Edit Workflow ${workflowName}` : 'Create New Workflow'}</h1>
            
            <div className="builder-header">
                <input 
                    type="text" 
                    placeholder="Workflow Name" 
                    className="input-name"
                    value={workflowName}
                    onChange={(e) => setWorkflowName(e.target.value)}
                />
                <button className="mock-button" style={{ backgroundColor: 'green' }}>
                    {isEditing ? 'Update & Save' : 'Save Workflow'}
                </button>
            </div>

            <div className="workflow-flow">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        {/* Render the step block */}
                        <StepBlock 
                            step={step} 
                            index={index} 
                            onClick={() => handleStepClick(index)} 
                            isSelected={index === selectedStepIndex}
                        />
                        {index < steps.length - 1 && <div className="flow-connector">⬇️</div>}
                    </React.Fragment>
                ))}
            </div>
            
            <button onClick={handleAddStep} className="add-step-button">
                + Add Action Step
            </button>
            {selectedStepIndex !== null && (
                <div className="detail-panel">
                    <h3>Configuration for Step {selectedStepIndex + 1} ({steps[selectedStepIndex].app})</h3>
                    <p>This is the mock panel for configuring **Inputs** and **Data Mapping**.</p>
                    <p>Here you would drag-and-drop variables from previous steps into the current step's fields.</p>
                    <button className="mock-button" onClick={() => setSelectedStepIndex(null)}>Close Panel</button>
                </div>
            )}
        </div>
    );
}

export default WorkflowBuilder;