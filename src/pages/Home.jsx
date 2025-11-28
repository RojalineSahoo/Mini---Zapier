// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Home() {
    return (
        <div className="homepage-layout">
            
            {/* Top Navigation for Landing Page */}
            <div className="home-nav">
                <div className="sidebar-logo" style={{ margin: 0 }}>⚡ MiniZap</div>
                <div>
                    {/* Login Button */}
                    <Link to="/dashboard" className="login-button">
                        Login
                    </Link>
                    {/* Primary CTA (Sign Up) */}
                    <Link to="/dashboard" className="cta-button">
                        Sign Up Free
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <div className="home-hero">
                <h1 className="hero-tagline">
                    Connect Your Apps, Automate Your Life.
                </h1>
                <p className="hero-subtitle">
                    MiniZap lets you build custom workflows to move data between your favorite tools, instantly and without code.
                </p>
                <div style={{ marginTop: '20px' }}>
                    <Link to="/dashboard" className="cta-button">
                        Get Started - It's Free!
                    </Link>
                </div>
            </div>
            
            {/* Features Section */}
            <div className="features-section">
                <h2>How It Works</h2>
                <p style={{ color: '#555' }}>Simple automation in three easy steps.</p>
                
                <div className="feature-grid">
                    <div className="feature-item">
                        <span style={{ fontSize: '2em' }}>1️⃣</span>
                        <h4>Set a Trigger</h4>
                        <p>Pick an app and event (e.g., "New email in Gmail") to start your workflow.</p>
                    </div>
                    
                    <div className="feature-item">
                        <span style={{ fontSize: '2em' }}>2️⃣</span>
                        <h4>Define Actions</h4>
                        <p>Choose the app and the action to perform (e.g., "Send a message in Slack").</p>
                    </div>
                    
                    <div className="feature-item">
                        <span style={{ fontSize: '2em' }}>3️⃣</span>
                        <h4>Launch Your Zap</h4>
                        <p>Turn your workflow on. MiniZap handles the rest, 24/7.</p>
                    </div>
                </div>
            </div>
            
            {/* Simple Footer Placeholder */}
            <footer style={{ padding: '20px', textAlign: 'center', color: '#666', borderTop: '1px solid #eee' }}>
                &copy; 2024 MiniZap Automation Platform.
            </footer>

        </div>
    );
}

export default Home;