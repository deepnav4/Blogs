import React, { useState, useEffect } from 'react'
import "./Spinner.css"
import gif from "./gif.gif"

const Spinner = () => {
    const [loadingText, setLoadingText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    const loadingMessages = [
        "Writing blog for you!",
        "Fetching amazing content...", 
        "Brewing fresh articles...",
        "Loading your reading adventure...",
        "Preparing your digital stories...",
        "Curating the best content...",
        "Gathering inspiration...",
        "Polishing the words...",
        "Setting up your reading space...",
        "Making magic happen..."
    ];

    useEffect(() => {
        const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        setLoadingText(randomMessage);

        // Add fade-out effect after a delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust timing as needed (2 seconds in this example)

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`loading-div ${!isLoading ? 'fade-out' : ''}`}>
            <div className='loading-container'>
                <img className='loading-img' src={gif} alt="loading"/>
                <p className='loading-text'>{loadingText}</p>
            </div>
        </div>
    )
}

export default Spinner
