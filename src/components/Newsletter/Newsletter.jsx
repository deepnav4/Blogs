import React, { useState } from 'react'
import "./Newsletter.css"

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
        setStatus('Thanks for subscribing!');
        setEmail('');
        }
    };

    return (
        <>
        <div className='hero'>
            <div className="hero-container">
                <h1>NEWSLETTER</h1>
            </div>
        </div>
        <section className="newsletter-section">
            <div className="newsletter-content">
            <p className="newsletter-description">
                Join our community and get the latest updates, exclusive content, and special offers delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="newsletter-form">
                <div className="input-group">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                />
                <button type="submit">Subscribe</button>
                </div>
                {status && <p className="status-message">{status}</p>}
            </form>

            <div className="newsletter-benefits">
                <div className="benefit-item">
                <span>✨ Weekly Updates</span>
                </div>
                <div className="benefit-item">
                <span>🎁 Exclusive Offers</span>
                </div>
                <div className="benefit-item">
                <span>📚 Expert Tips</span>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
